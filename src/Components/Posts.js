import React from 'react'
import {connect} from 'react-redux'
import Post from './Post'

const Posts = ({syncPosts}) => {
    if(!syncPosts.length) {
        return <p>Постов пока нет</p>
    }
    return syncPosts.map(post => <Post post={post} key={post} />)
}

const mapStateToProps = state => {
    return {
        syncPosts: state.posts.posts
    }
}

//connect - функция высшего порядка
//такой страннй синтаксис так как connect() вернет функцию в которую и будет оборочавиться Posts
export default connect(mapStateToProps, null)(Posts)