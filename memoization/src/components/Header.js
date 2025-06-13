import React from 'react'

function Header({increment}) {
  console.log("Header component R-rendered!")
  return (
    <div>
      Header

      <br/>
      <br/>

      <button onClick={increment}>Click</button>
    </div>
  )
}
// React.memo ile sarmalanan component yeni prop alıp ya da prop değişmediği sürece re-render olmaz

// useMemo herhangi bir componente geçilen propslardaki değişim esnasında oluşacak gereksiz renderi engellemek için kullanılır 
// veya component içinde iki farklı değer varsa
// ve bu değerler referans tipliyse yani object,array gibi tiplerse o zaman referans adresleri her re-render olduğunda değişecek 
// ve gereksiz re-render olacaktır.
// Bu yüzden çalışmasını istemediğimiz bir şeyi useMemo içinde yazmamız lazım.... 
// useCallBack ise herhangi bir componente gönderilen fonksiyonun baştan tanımlanmaması için yani re-render olmaması için kullanılır....
// React.memo'nun ise iki farklı açıklaması var. 
// Birincisi componente props veya fonksiyon geçilmemişse
// ve gereksiz render oluyorsa render olmasını istemediğimiz componentin export default kısmında
// React.memo koymamız gerekir.
// İkincisi ise componente geçilen props değişince render olmasını sağlayabiliriz
export default React.memo(Header)
