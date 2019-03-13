exports.getLogin = (req, res, next) => {
    const isLoggedIn = req.get('Cookie').trim().split('=')[1] === 'true';
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: isLoggedIn
    });
};

exports.postLogin = (req, res, next) => {
    res.setHeader('Set-Cookie', 'loggeIn=true; HttpOnly');
    res.redirect('/');
};
