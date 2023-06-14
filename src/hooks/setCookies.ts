import Cookies from 'js-cookie'

const setCookie = (cookiename: any, userIDin: any) => {
	Cookies.set(cookiename, userIDin, {
		expires: 2, //2 days
		HttpOnly:true,
		secure: false,
		sameSite: "Strict",
		path:'/'
	})
		
}

export default setCookie

 