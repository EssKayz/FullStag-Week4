const dummy = (blogs) => {
    return 1
}

const totalLikes = (param) => {
    let tot = 0
    for (i = 0; i < param.length; i++) {
        tot += param[i].likes
    }
    return tot
}

const favoriteBlog = (param) => {
    let Fav
    let best = 0
    for (i = 0; i < param.length; i++) {
        if (param[i].likes > best) {
            best = param[i].likes
            Fav = param[i]
        }
    }
    return Fav
}

const mostBlogs = (param) => {
    const derp = param.sort((a, b) => param.filter(v => v.author === a.author).length - param.filter(v => v.author === b.author))[param.length - 1]
    const count = param.filter(v => v.author === derp.author).length
    return { author: derp.author, blogs: count}
}


module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs
}

