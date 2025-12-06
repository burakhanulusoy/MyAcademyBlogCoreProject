using Microsoft.AspNetCore.Mvc;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Blogy.WebUI.Controllers
{
    public class ContactController(IConfiguration _configuration) : Controller
    {

        private readonly string myApikey = _configuration["MyApiKey"];

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        // AJAX isteği buraya gelecek
        [HttpPost]
        public async Task<JsonResult> SendMessage(string message)
        {
            if (string.IsNullOrWhiteSpace(message))
            {
                return Json(new { success = false, answer = "Lütfen boş mesaj göndermeyin." });
            }

            try
            {
                using var client = new HttpClient();
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", myApikey);

                var requestBody = new
                {
                    model = "gpt-4o-mini", // Veya gpt-3.5-turbo
                    messages = new[]
                    {
                        new {
                            role = "system",
                            content = "Sen Blogy adlı blog platformunun yapay zeka destekli müşteri hizmetleri asistanısın. " +
                                      "Görevin: üyelere platform hakkında bilgi vermek, sorularını yanıtlamak ve kibar bir şekilde sohbet etmektir. " +
                                      "Blogy hakkında bilmen gerekenler: Kullanıcılar ücretsiz üye olabilir, blog yazabilir, bloglara yorum yapabilir. " +
                                      "Sitemizde toksiklik analiz sistemi vardır, saygı önceliğimizdir. " +
                                      "Kullanıcı 'nasılsın' gibi sorular sorarsa doğal bir insan gibi cevap ver, ardından yardımcı olabileceğin bir konu olup olmadığını sor."
                        },
                        new { role = "user", content = message }
                    }
                };

                var content = new StringContent(JsonSerializer.Serialize(requestBody), Encoding.UTF8, "application/json");

                // OpenAI API İsteği
                var response = await client.PostAsync("https://api.openai.com/v1/chat/completions", content);
                var responseString = await response.Content.ReadAsStringAsync();

                using var doc = JsonDocument.Parse(responseString);

                // Hata kontrolü (API key hatası vs varsa patlamasın)
                if (response.IsSuccessStatusCode)
                {
                    string aiMessage = doc.RootElement.GetProperty("choices")[0].GetProperty("message").GetProperty("content").GetString();
                    // JSON olarak cevabı dönüyoruz
                    return Json(new { success = true, answer = aiMessage });
                }
                else
                {
                    return Json(new { success = false, answer = "Üzgünüm, şu an bağlantı kuramıyorum." });
                }
            }
            catch (Exception)
            {
                return Json(new { success = false, answer = "Bir hata oluştu." });
            }
        }


    }
}
