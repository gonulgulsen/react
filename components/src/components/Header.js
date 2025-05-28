function Header(){
    const name = "Gönül";
    const surname = "Kurt";
    const isLoggedIn = false;
    return(
        // Bir class ismi verilecekse jsx de bu className olarak verilir.
        // Label a htmlFor, input a da id vererek label ın o inputa ait olduğunu buna focuslanması gerektiğini söylemiş olduk.
        // Yukarıdaki gibi bir değişken tanımlanıp istenilen yerler de kullanılabilir.
        // koşullu render işlemleri de yapılabiir.
        <div>
           <h1> Header Bileşeni </h1>
           <p className="xxx">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
             It has survived not only five centuries, but also the leap into electronic typesetting,
             remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <label htmlFor="myinput">
                Name
                <input id="myinput"/>
            </label>
            <h4>{name} {surname}</h4>
            <h4>{`Benim adım ${name}, soyadım ${surname}`}</h4>

            <h3>{isLoggedIn && `Benim adım ${name}, soyadım ${surname}`}</h3>
            <h3>{!isLoggedIn && 'Giriş Yapmadınız.'}</h3>


            <h3>{isLoggedIn ? `Benim adım ${name}, soyadım ${surname}` : 'Giriş Yapmadınız.'}</h3>
        </div>
    );
}

export default Header;