using AutoMapper;
using Blogy.Business.DTOs.CommentDtos;
using Blogy.DataAccess.Repositories.CommentRepositories;
using Blogy.Entity.Entities;
using FluentValidation;
using System.Linq.Expressions;

namespace Blogy.Business.Services.CommentServices
{
    public class CommentService(ICommentRepository _commentRepository
                               ,IMapper _mapper
                               ,IValidator<Comment> _validator ) : ICommentService
    {
        public async Task CreateAsync(CreateCommentDto createDto)
        {
           
            var comment=_mapper.Map<Comment>(createDto);

            var result=await _validator.ValidateAsync(comment);
            if(!result.IsValid)
            {
                throw new ValidationException(result.Errors);
            }
             await _commentRepository.CreateAsync(comment);

        }

        public async Task DeleteAsync(int id)
        {

            await _commentRepository.DeleteAsync(id);

        }

        public async Task<List<ResultCommentDto>> GetAllAsync()
        {
            var comments=await _commentRepository.GetAllAsync();
            return _mapper.Map<List<ResultCommentDto>>(comments);


        }

        public async Task<List<ResultCommentDto>> GetAllAsync(Expression<Func<Comment, bool>> filter)
        {

            var filterComments = await _commentRepository.GetAllAsync(filter);
            return _mapper.Map<List<ResultCommentDto>>(filterComments);




        }

        public async Task<UpdateCommentDto> GetByIdAsync(int id)
        {

            var comment = await _commentRepository.GetByIdAsync(id);
            return _mapper.Map<UpdateCommentDto>(comment);


        }

        public async Task UpdateAsync(UpdateCommentDto updateDto)
        {

            var comment = _mapper.Map<Comment>(updateDto);

            var result = await _validator.ValidateAsync(comment);
            if (!result.IsValid)
            {
                throw new ValidationException(result.Errors);
            }

            await _commentRepository.UpdateAsync(comment);


        }
    }
}
