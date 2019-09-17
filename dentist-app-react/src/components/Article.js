import React, {PureComponent} from 'react';

class Article extends PureComponent {

    render() {
        const { article, isOpen } = this.props
        const body = isOpen && <section className="card-text">{article.text}</section>
        return (
            <div className='card mx-auto' style={{width: '50%'}}>
                <div className="card-header">
                    <h2>
                        {article.title}
                        <button onClick={this.handleClick} className="btn btn-primary btn-lg float-right">
                            {isOpen ? 'Close' : 'Open'}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">creation date: {(new Date(article.date)).toDateString()}</h6>
                    {body}
                </div>
            </div>
        );
    }

}

export default Article