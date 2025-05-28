import PropTypes from "prop-types";

function User({ name, surname, age, isLoggedIn, friends, address }){
    if(!isLoggedIn){
        return <div>Giriş Yapmadınız.</div>
    }

    return (
        <>
        <h1> {`${name} ${surname} (${age})`} </h1>
        {address.title} {address.zip}
        <br/>
        <br/>
        {friends &&
        friends.map((friend) => <div key={friend.id}>{friend.name}</div>)}

        {
            friends ? <div>var</div> : <div>yok</div>
        }

        { friends && <div>var</div> }
        { !friends && <div>yok</div>}
        </>
    );    
}


//Burada oneOfType birden fazla prop türü tanımlamamıza olanak sağlıyor.
//Propları zorunlu kılmak için de isRequired ekliyoruz.
//Bir objenin içindeki propların türünü göstermek için de shape kullanıyoruz.
//defaultProps kullanarak da tür ataması yapılmamış prop a atama yaptırabiliriz.
User.PropTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number,
    }),
};

User.defaultProps = {
    name: "İsimsiz",
    isLoggedIn: false,
};

export default User;