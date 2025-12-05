using AutoMapper;
using Blogy.Business.DTOs.CategoryDtos;
using Blogy.DataAccess.Repositories.CategoryRepositories;
using Blogy.Entity.Entities;
using System.Linq.Expressions;

namespace Blogy.Business.Services.CategoryServices
{
    public class CategoryService : ICategoryService
    {

        private readonly ICategoryRepository _categoryRepository;
        private readonly IMapper _mapper;

        public CategoryService(ICategoryRepository categoryRepository, IMapper mapper)
        {
            _categoryRepository = categoryRepository;
            _mapper = mapper;
        }

       
        public async Task CreateCategoryAsync(CreateCategoryDto createCategoryDto)
        {
            
            var IsHaveName=await _categoryRepository.AnyHaveCategoryAsync(x=>x.Name==createCategoryDto.Name);
            if (IsHaveName)
            {
                throw new Exception("Bu kategori adý zaten mevcut !");
            }

            var category=_mapper.Map<Category>(createCategoryDto);
            await _categoryRepository.CreateAsync(category);
        }

        public async Task DeleteCategoryAsync(int id)
        {
           await _categoryRepository.DeleteAsync(id);
        }

        public async Task<List<ResultCategoryDto>> GetAllCategoryAsync()
        {
            var categories= await _categoryRepository.GetAllAsync();
            return _mapper.Map<List<ResultCategoryDto>>(categories);


        }

        public async Task<List<ResultCategoryDto>> GetAllCategoryAsync(Expression<Func<Category, bool>> filter)
        {
           
            var categories=await _categoryRepository.GetAllAsync(filter);
            return _mapper.Map<List<ResultCategoryDto>>(categories);

        }

        public async Task<UpdateCategoryDto> GetByIdCategoryAsync(int id)
        {
            
            var category=await _categoryRepository.GetByIdAsync(id);
            return _mapper.Map<UpdateCategoryDto>(category);


        }

        public async Task<List<ResultCategoryDto>> GetCategoriesWithBlogsAsync()
        {
            var categories=await _categoryRepository.GetCategoriesWithBlogsAsync();
            return _mapper.Map<List<ResultCategoryDto>>(categories); 


        }

        public async Task UpdateCategoryAsync(UpdateCategoryDto updateCategoryDto)
        {
            var IsHaveName = await _categoryRepository.AnyHaveCategoryAsync(x => x.Name == updateCategoryDto.Name);
            if (IsHaveName)
            {
                throw new Exception("Bu kategori adý zaten mevcut !");
            } 

            var category=_mapper.Map<Category>(updateCategoryDto);
            await _categoryRepository.UpdateAsync(category);

        }
    }
}
