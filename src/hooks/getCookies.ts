import Cookies from 'js-cookie'

const getCookie = (cookiename: any) => {
return	Cookies.get(cookiename )
		
}

export default getCookie
