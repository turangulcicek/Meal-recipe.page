import {elements} from "./js/helpers.js";
import { Search } from "./js/api.js";
import {clearLoader, renderLoader, renderResults} from "./js/ui.js";


// olay izleyicileri
elements.form.addEventListener('submit', handleSubmit);
// fonksiyonlar
 async function handleSubmit(e) {
    e.preventDefault();
    // aratılan kelime
    const query=elements.searchInput.value;
    // arama terimi boş değiilse çalışır
    if(query){
        // search sınıfının bir örneğini oluştur
        const search=new Search(query);
        // istek atmaya başlamadan önce loader'ı ekrana bas
        renderLoader(elements.resultList);
        // istek atma
        try{
            await search.getResults();
            // isteğe cevap gelince loader'ı ekrandan kaldır
            clearLoader();
            renderResults(search.result);
        }catch(err){
            alert("size göre uygun tarif bulunamadı")
            clearLoader();

        }
    }
    
};

