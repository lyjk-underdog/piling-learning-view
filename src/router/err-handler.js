import VueRouter from "vue-router";

const methods = ["push" , "repalce"];

methods.forEach(method => {
    const original = VueRouter.prototype[method];

    VueRouter.prototype[method] = function(...args){
        return original.apply(this, args).catch(err => {
            if (err.name !== 'NavigationDuplicated' &&
                !err.message.includes('Avoided redundant navigation to current location')) {
                throw err;
            }
        })
    }
})