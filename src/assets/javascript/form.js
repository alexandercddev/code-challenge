/** 
 * @author alexandercddev
 * @description  
 * @date21/octubre/2021
**/ 
let data = {
    isAdminLogin: false,
    totalSiteLogins: 0
}; 

$(document).ready( () => {  
    const formData = ({ value, name }) => { 
        data = {
            ...data,
            [name]: value
        };
    }  
    const setTitle = (isAdminLogin) => { 
        $('#hText').text(isAdminLogin ? 'Admin Login' : 'Login')
    }

    setTitle(data.isAdminLogin);
    
    $('#userName').on('input', ({ target }) => {
        formData(target)
    });
     
    $('#password').on('input', ({ target }) => {
        formData(target);
    });  

    $('#form').submit((e) => { 
        e.preventDefault();    
        const { userName, password, isAdminLogin, totalSiteLogins } = data;
        console.log(data)
        if( userName !== undefined && password !== undefined ) {
            if( userName.trim() !== '' && password.trim() !== '' ) {
                formData({value: totalSiteLogins + 1, name: 'totalSiteLogins'});
                formData({value: !isAdminLogin, name: 'isAdminLogin'})
                setTitle(!isAdminLogin);
                $('.info').text((totalSiteLogins + 1).toFixed(2));
                $('.error').text('')
            }else{
                $('.error').text("User Name or Password emtyp")
            }
        }else{
            $('.error').text("User Name or Password emtyp")
        }
    });
     
});

