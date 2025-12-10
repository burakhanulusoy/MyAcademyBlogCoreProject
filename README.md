# 🚀 AI-Powered Blog Project (.NET 8.0)

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![.NET](https://img.shields.io/badge/.NET-8.0-purple)
![MSSQL](https://img.shields.io/badge/Database-MSSQL-red)
![Architecture](https://img.shields.io/badge/Architecture-N--Layer-green)

Bu proje, **.NET 8.0** kullanılarak geliştirilmiş, **N-Katmanlı Mimari (N-Layer)** yapısına ve **Repository Design Pattern** prensiplerine sadık kalınarak hazırlanmış kapsamlı, yapay zeka destekli bir blog platformudur.

Proje, yazarların kategori ve etiket bazlı içerik üretebildiği, kullanıcıların güvenli bir şekilde etkileşime girebildiği ve tüm bu süreçlerin **OpenAI, Google Gemini ve Hugging Face** modelleriyle denetlendiği modern bir web uygulamasıdır.

---


## 📖 Blog Platformu ve İşleyiş

Proje, kullanıcıların rahatça içerik tüketebileceği ve üretebileceği bir akış sunar:

* **Zengin İçerik Yapısı:** Yazarlar, blog yazılarını oluştururken **Kategori** ve **Etiket (Tag)** seçimi yaparak içerikleri sınıflandırır. Bu sayede kullanıcılar ilgi alanlarına (Örn: Teknoloji, Seyahat) göre içerikleri kolayca filtreleyebilir.
* **Sayfalama (Pagination):** Anasayfa ve kategori sayfalarında veriler sayfalama yapısı ile sunulur, bu da performanslı ve düzenli bir okuma deneyimi sağlar.
* **Yazar Olma Süreci:** Siteye kayıt olan herkes standart "User"dır. İçerik üretmek isteyenler, panel üzerinden `doYouWantWriter` talebi gönderir. Admin onayı (bool kontrolü) sonrası kullanıcı "Writer" paneline erişim kazanır.
* **Güvenli Etkileşim:** Kullanıcılar bloglara yorum yapabilir ancak bu yorumlar yapay zeka tarafından denetlenmeden yayınlanmaz/kaydedilmez.

---

## 🌟 Temel Özellikler ve AI Gücü

### 🔐 Rol ve Yetkilendirme (Identity)
* **User:** Blog okuma, yapay zeka ile sohbet, yorum yapma.
* **Writer:** Admin onaylı içerik üreticileri. Blog yazma, düzenleme, kategori/etiket atama.
* **Admin:** Tüm sistemin, kullanıcıların, onayların ve içeriklerin tek elden yönetimi.

### 🤖 Yapay Zeka Entegrasyonları (4 Farklı Entegrasyon)
Proje güvenliği ve kullanıcı deneyimini artırmak için 4 kritik noktada AI kullanır:

1.  **Hugging Face (Blog Toksiklik Analizi):** Yazarların girdiği blog içerikleri yayınlanmadan önce taranır. Toksik içerik tespit edilirse yayınlanmaz ve Admin onayına düşer.
2.  **Google Gemini (Yorum Toksiklik Analizi):** Kullanıcı yorumları Gemini API ile anlık analiz edilir. Hakaret veya zararlı içerik barındıran yorumlar veritabanına dahi kaydedilmeden engellenir.
3.  **OpenAI (Yorum Asistanı):** Kullanıcılar bir blog yazısına yorum yaparken fikir almak isterse, AI içeriğe uygun yapıcı bir yorum taslağı hazırlar.
4.  **OpenAI (Site Chatbot):** Siteye özel eğitilmiş (System Prompt) chatbot, kullanıcılara sadece proje ve içerikleri hakkında bilgi verir.

---

## 🏗 Mimari ve Teknik Detaylar

Proje sürdürülebilirlik ve ölçeklenebilirlik gözetilerek **Onion Architecture** benzeri 4 katmanlı bir yapıda kurgulanmıştır.

* **Entity Layer:** Veritabanı tabloları, User/Writer sınıfları.
* **Data Access Layer (DAL):** Entity Framework Core, Migration, Repository Pattern.
* **Business Layer:** Validasyonlar (Fluent Validation), İş kuralları, DTO Mapping.
* **UI / Presentation Layer:** Controller'lar, View'ler, Area Yapısı (Admin/Writer).

### 🛠 Teknolojiler

* **Backend:** ASP.NET Core 8.0
* **Database:** MSSQL Server
* **ORM:** Entity Framework Core
* **Mapping:** AutoMapper
* **Validation:** Fluent Validation
* **IoC:** Scrutor (Auto Registration)
* **Performance:** Lazy & Eager Loading

---

## 🚀 Kurulum (Installation)

1.  Repoyu klonlayın: `git clone https://github.com/kullaniciadi/projeadi.git`
2.  `appsettings.json` dosyasında MSSQL bağlantı cümlenizi (ConnectionString) güncelleyin.
3.  API Anahtarlarınızı (OpenAI, Hugging Face, Gemini) yapılandırma dosyasına ekleyin.
4.  Migration komutunu çalıştırın: `update-database`
5.  Projeyi başlatın.

---


## 📸 Ekran Görüntüleri

| Ana Sayfa  | Admin Paneli | Writer Paneli

<img width="1887" height="1024" alt="Ekran görüntüsü 2025-12-10 150134" src="https://github.com/user-attachments/assets/4d8b7f57-dd4d-4b59-8406-3f78de5c9b0b" />
<img width="1903" height="1027" alt="Ekran görüntüsü 2025-12-10 150150" src="https://github.com/user-attachments/assets/0592813f-baea-4987-9776-2fde3d099b1b" />
<img width="1902" height="1019" alt="Ekran görüntüsü 2025-12-10 150205" src="https://github.com/user-attachments/assets/c8f38be7-3791-4820-8d99-7c2cc90284c6" />
<img width="1914" height="1028" alt="Ekran görüntüsü 2025-12-10 150215" src="https://github.com/user-attachments/assets/9c0a3045-2000-499b-9ad9-f491289601d2" />
<img width="1903" height="1027" alt="Ekran görüntüsü 2025-12-10 150225" src="https://github.com/user-attachments/assets/56a02596-012d-49a5-a712-3f75f47037fd" />
<img width="1919" height="1025" alt="Ekran görüntüsü 2025-12-10 150239" src="https://github.com/user-attachments/assets/2c5b0ab6-99ad-481c-9a32-f0016a1a7695" />
<img width="1916" height="1029" alt="Ekran görüntüsü 2025-12-10 150254" src="https://github.com/user-attachments/assets/c20a3890-789d-4beb-8bc6-078f9a2247b1" />
<img width="1903" height="1028" alt="Ekran görüntüsü 2025-12-10 150328" src="https://github.com/user-attachments/assets/4e762318-fabd-4608-857f-9d3021e6aca3" />
<img width="1908" height="1016" alt="Ekran görüntüsü 2025-12-10 150343" src="https://github.com/user-attachments/assets/5142919c-b971-4d27-bd5a-7fee7e2fe2c9" />
<img width="1915" height="1031" alt="Ekran görüntüsü 2025-12-10 150354" src="https://github.com/user-attachments/assets/caef2f73-e1c3-4c17-8822-57dbc769547c" />
<img width="1915" height="1033" alt="Ekran görüntüsü 2025-12-10 151654" src="https://github.com/user-attachments/assets/ff1fe362-79f5-4b6a-a8eb-dcd2d9874918" />
<img width="1913" height="943" alt="Ekran görüntüsü 2025-12-10 151702" src="https://github.com/user-attachments/assets/11949d4c-4c55-4e77-822d-f32c2313d196" />
<img width="1904" height="945" alt="Ekran görüntüsü 2025-12-10 151709" src="https://github.com/user-attachments/assets/eaa12574-d5c3-4f94-9491-3551f795db8e" />
<img width="1912" height="957" alt="Ekran görüntüsü 2025-12-10 151714" src="https://github.com/user-attachments/assets/06605968-8303-43ab-aa19-755806f9722b" />

<br><br><br>
🤖Yapay Zeka-1
🤖
🤖Open-Ai İle yorum analizi bu sayede güvenli site kuralları
🤖
<img width="1910" height="723" alt="Ekran görüntüsü 2025-12-10 151837" src="https://github.com/user-attachments/assets/29c14414-e097-4c1f-8082-f7b40ab46af7" />
<img width="1908" height="505" alt="Ekran görüntüsü 2025-12-10 151929" src="https://github.com/user-attachments/assets/fa89f3d7-ebcf-46eb-ba39-ebe4b2fd77e9" />
<img width="1908" height="682" alt="Ekran görüntüsü 2025-12-10 151950" src="https://github.com/user-attachments/assets/749242e7-1e02-4924-9b72-cba5515cb816" />
<img width="1914" height="1019" alt="Ekran görüntüsü 2025-12-10 150425" src="https://github.com/user-attachments/assets/445fe608-f7af-4dc5-b7b4-124a670a3e0a" />

<br><br><br>
🤖
🤖Yapay Zeka-2
🤖Gemini ile sadece siteyi ilgilendiren konular hakıında sohbet 
🤖
<img width="1897" height="1028" alt="Ekran görüntüsü 2025-12-10 150505" src="https://github.com/user-attachments/assets/86d12d4c-2a98-439f-846d-724fc55162de" />
<img width="1907" height="1022" alt="Ekran görüntüsü 2025-12-10 150532" src="https://github.com/user-attachments/assets/46d83dd0-d28f-4cf6-b044-24e5369abb41" />
<img width="1901" height="1010" alt="Ekran görüntüsü 2025-12-10 150604" src="https://github.com/user-attachments/assets/6445851b-70f0-42f7-8c6f-ff9adc83457b" />
<img width="1900" height="773" alt="Ekran görüntüsü 2025-12-10 150701" src="https://github.com/user-attachments/assets/e0cba4c1-0e64-4426-8bcc-0a7d845568e4" />
<img width="1906" height="847" alt="Ekran görüntüsü 2025-12-10 150728" src="https://github.com/user-attachments/assets/5bbddf80-ed87-41d3-9b1b-a8509d18950a" />
<br><br><br>
Login&Register
<img width="1892" height="1024" alt="Ekran görüntüsü 2025-12-10 150739" src="https://github.com/user-attachments/assets/49682def-e2d9-4179-9ebe-81811f38eee5" />
<img width="1916" height="1028" alt="Ekran görüntüsü 2025-12-10 150755" src="https://github.com/user-attachments/assets/fad5af25-40ee-4d95-8140-94ba527fefdd" />
<br><br><br>
Admin Paneli

<img width="1914" height="1025" alt="Ekran görüntüsü 2025-12-10 150820" src="https://github.com/user-attachments/assets/22f1af44-46df-4647-b7b3-90d38e9eacd0" />
<img width="1918" height="1026" alt="Ekran görüntüsü 2025-12-10 150830" src="https://github.com/user-attachments/assets/575c1e42-a7ef-43f1-b1d1-bd259301b75e" />
<img width="1919" height="1029" alt="Ekran görüntüsü 2025-12-10 150843" src="https://github.com/user-attachments/assets/4b848ac7-633d-432a-9c53-8fbffd5968cc" />
<img width="1912" height="1015" alt="Ekran görüntüsü 2025-12-10 150908" src="https://github.com/user-attachments/assets/59c8181b-6ebc-420b-891f-30c7056b0d81" />
<img width="1917" height="809" alt="Ekran görüntüsü 2025-12-10 151022" src="https://github.com/user-attachments/assets/4a7ca150-5aab-4c2a-b5f5-ded3637570aa" />
<img width="1914" height="1018" alt="Ekran görüntüsü 2025-12-10 151033" src="https://github.com/user-attachments/assets/53fc5b5d-b2d8-4f44-9764-7ce532038f75" />
<img width="1919" height="869" alt="Ekran görüntüsü 2025-12-10 151044" src="https://github.com/user-attachments/assets/638edd8f-36c4-4bf1-95e5-019d75944a25" />
<img width="1913" height="1017" alt="Ekran görüntüsü 2025-12-10 151057" src="https://github.com/user-attachments/assets/361d2843-76bd-4912-9e20-3a7cf78d3ee4" />
<img width="1911" height="837" alt="Ekran görüntüsü 2025-12-10 151108" src="https://github.com/user-attachments/assets/c7ef9f6b-f79e-4b57-8208-7c36232b0541" />
<img width="1914" height="1026" alt="Ekran görüntüsü 2025-12-10 151121" src="https://github.com/user-attachments/assets/a3cc8896-d628-4e21-838e-fe498342b489" />
<img width="1908" height="1009" alt="Ekran görüntüsü 2025-12-10 151144" src="https://github.com/user-attachments/assets/c692f6b4-7c6f-4f34-9287-b4ddbb317c03" />

<br><br><br>
🤖
YapayZeka-3 Hugging Face Toxiclik Analizi
🤖
🤖
<img width="1897" height="1017" alt="Ekran görüntüsü 2025-12-10 151155" src="https://github.com/user-attachments/assets/956d5f21-933b-483e-a563-23dd9f2b3800" />
<img width="1902" height="990" alt="Ekran görüntüsü 2025-12-10 151211" src="https://github.com/user-attachments/assets/18d15716-29b9-4cc5-97b0-39df7e7ca1e3" />
<img width="1875" height="852" alt="Ekran görüntüsü 2025-12-10 155610" src="https://github.com/user-attachments/assets/04936883-838d-4d79-867a-acdf57f2be47" />

<img width="1907" height="1020" alt="Ekran görüntüsü 2025-12-10 151216" src="https://github.com/user-attachments/assets/bd92d548-4704-4d8e-882e-6df77115b564" />
<img width="1915" height="1009" alt="Ekran görüntüsü 2025-12-10 151230" src="https://github.com/user-attachments/assets/29299d6e-74b9-4e36-a1df-302778826ee0" />
<br><br><br>
Her YAZARIN iSTATİSLİK Bilgileri
<img width="1913" height="1017" alt="Ekran görüntüsü 2025-12-10 151305" src="https://github.com/user-attachments/assets/9a7609c8-6a43-465a-9a32-7bae52a9f4b0" />
<img width="1919" height="883" alt="Ekran görüntüsü 2025-12-10 151313" src="https://github.com/user-attachments/assets/7cf84c5d-c609-4399-9f01-cfb30b0fd9ce" />
<img width="1919" height="883" alt="Ekran görüntüsü 2025-12-10 151321" src="https://github.com/user-attachments/assets/0ab2998a-ff80-4252-ac77-158430653e45" />

<img width="1904" height="835" alt="Ekran görüntüsü 2025-12-10 151343" src="https://github.com/user-attachments/assets/abc4731c-f0d1-4a00-8553-f637d76fa83b" />

<img width="1905" height="1009" alt="Ekran görüntüsü 2025-12-10 151358" src="https://github.com/user-attachments/assets/e826c81d-dc41-451e-aaf4-b73ac720b7e7" />
<img width="1904" height="1025" alt="Ekran görüntüsü 2025-12-10 151415" src="https://github.com/user-attachments/assets/c3b0ad21-3d8f-4dbb-afc0-dd330ae5fe4e" />
<img width="1906" height="985" alt="Ekran görüntüsü 2025-12-10 151423" src="https://github.com/user-attachments/assets/1ff522a1-131f-4162-b524-2db63fc986d0" />
<img width="1894" height="1022" alt="Ekran görüntüsü 2025-12-10 151433" src="https://github.com/user-attachments/assets/806f725c-c8e9-4bb8-94f5-f9a5abbb19d8" />

<img width="1913" height="1027" alt="Ekran görüntüsü 2025-12-10 151443" src="https://github.com/user-attachments/assets/5ecac844-6fc4-4240-9738-6eb6e5390517" />
<br><br><br>
🤖🤖
🤖Yapay Zeka-4 OpenAi ile Yorum Oluştuma
🤖
🤖
<img width="1919" height="1023" alt="Ekran görüntüsü 2025-12-10 151501" src="https://github.com/user-attachments/assets/49fbcfc6-9d8f-4705-9f71-fde385221694" />
<img width="1909" height="897" alt="Ekran görüntüsü 2025-12-10 151549" src="https://github.com/user-attachments/assets/91e235da-5d92-445c-929d-08e197048e67" />



<img width="1912" height="805" alt="Ekran görüntüsü 2025-12-10 151558" src="https://github.com/user-attachments/assets/1af04355-cc3e-4e22-970d-ee0535c7bdd8" />


<img width="1913" height="863" alt="Ekran görüntüsü 2025-12-10 151605" src="https://github.com/user-attachments/assets/8dc5e3c0-f40f-4dfd-84d2-bbe92416eecd" />

<img width="1910" height="858" alt="Ekran görüntüsü 2025-12-10 151610" src="https://github.com/user-attachments/assets/9161407d-26ce-4adc-af1a-05545b3b914b" />

<img width="1919" height="1028" alt="Ekran görüntüsü 2025-12-10 151631" src="https://github.com/user-attachments/assets/5caf68b0-60b8-46f8-9245-43b2e7e9f76a" />

<br><br><br>
Writer Ekranı
<img width="1910" height="1031" alt="Ekran görüntüsü 2025-12-10 152022" src="https://github.com/user-attachments/assets/b3916c88-f2d2-4f46-a1a2-860dcd90d3b6" />




<img width="1919" height="1027" alt="Ekran görüntüsü 2025-12-10 152032" src="https://github.com/user-attachments/assets/b81b66e5-b8e3-4434-b7c0-7149dd8f20ba" />



<img width="1658" height="575" alt="Ekran görüntüsü 2025-12-10 152054" src="https://github.com/user-attachments/assets/daaf6634-aa09-424e-8561-77264f5bcb7d" />



<img width="1910" height="954" alt="Ekran görüntüsü 2025-12-10 152112" src="https://github.com/user-attachments/assets/cf30b686-9bab-42a1-8cd4-b745c85acc5f" />



<img width="1916" height="940" alt="Ekran görüntüsü 2025-12-10 152140" src="https://github.com/user-attachments/assets/1f99010d-156d-45ef-b4b7-cfcc734356e0" />


<br><br><br>
User Ekranı Yazar Olmak İsteme Sayfası

<img width="1912" height="624" alt="Ekran görüntüsü 2025-12-10 152811" src="https://github.com/user-attachments/assets/5da45f8d-1629-482d-ad0e-bbcb5520e789" />
<img width="1919" height="846" alt="Ekran görüntüsü 2025-12-10 152815" src="https://github.com/user-attachments/assets/b3dbc989-87bf-4338-84c7-2a1113d5bf1b" />
<img width="1910" height="742" alt="Ekran görüntüsü 2025-12-10 152821" src="https://github.com/user-attachments/assets/4c622c14-d2a1-44eb-a28f-f9dfec3658ef" />




## 👤 Yazar

**[Burak Han Ulusoy]**

* Video İçin: [Profil Linkin]
* Soru Sormanız İçin: [burakhanulusoy18@gmail.com]

--- böyle yaptım düzenlermisin
