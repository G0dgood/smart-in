import Cookies from 'js-cookie'

const removeCookie = (cookiename: any) => {
return	Cookies.remove(cookiename )
		
}

export default removeCookie