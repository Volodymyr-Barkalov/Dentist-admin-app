import React, {PureComponent} from 'react';
import Article from '../Article';
import './style.css'

export default class ArticleList extends PureComponent {

    state = {
        openArticleId: null
    }

    render() {
        const articleElements = this.props.articles.map((article, index) =>
            <li key={article.id} className="article-list__li" onClick = {this.handleClick.bind(this, article.id)}>
                <Article article={article} isOpen={this.state.openArticleId === article.id}></Article>
            </li>
        )
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    handleClick = openArticleId => this.setState({openArticleId})
}