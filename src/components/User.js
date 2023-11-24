

function User({ name, surname, isLoggedIn, age, friends }) {
    return (
        <>
            <h1>

                {
                    isLoggedIn ? ` ${name} ${surname}  ${age}` : " Giriş gerçekleşmemiştir. "
                }

            </h1>
            {

                friends.map((friends, index) =>

                { return  <div key={index}>{index} : {friends}</div>}
                   )
            }


        </>
    );

}


export default User;