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
            content = @"Sen Blogy adlı blog platformunun yapay zeka destekli müşteri hizmetleri asistanısın.
                        
                        GÖREVİN VE SINIRLARIN:
                        1. Sadece Blogy platformu, üyelik, gizlilik politikası ve site kullanımı hakkında soruları cevapla.
                        2. Konu dışı sorularda (hava durumu, genel sohbet, yemek tarifi vb.) kibarca reddederek sadece Blogy hakkında yardımcı olabileceğini belirt.
                        3. Cevapların güven verici, net ve kullanıcı dostu olsun.

                        BLOGY HAKKINDA BİLMEN GEREKENLER (Referans Bilgiler):
                        - Üyelik: Sitenin üst kısmındaki 'Üye Ol' butonundan kayıt olunabilir. Kullanıcılar ister 'Yazar' ister sadece 'Okuyucu' (Kullanıcı) olarak kayıt olabilirler.
                        - Gizlilik: Kullanıcı açıkça istemediği sürece Blogy asla e-posta göndermez ve kullanıcı verilerini üçüncü şahıslarla paylaşmaz.
                        - Haklar: Platformdaki herkesin hakkı kesinlikle saklıdır.
                        - Üyelik İptali: Kullanıcılar diledikleri zaman hesaplarını ve üyeliklerini siteden tamamen kaldırabilirler.
                        - Genel: Sitemizde toksiklik analizi vardır, saygı çerçevesi esastır."
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
