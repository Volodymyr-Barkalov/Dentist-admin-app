import React, {PureComponent} from 'react';

class Article extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }

    }
    //
    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.state.isOpen !== nextState.isOpen
    // }

    componentWillMount() {
        console.log('---', 'mounting')
    }

    // componentWillReceiveProps(nextProps) {
    //     if(nextProps.defaultOpen !== this.props.defaultOpen) {
    //         this.setState({isOpen: nextProps.defaultOpen})
    //     }
    // }

    componentWillUpdate() {
        console.log('---', 'will update')
    }

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

    handleClick = () => {
        // this.setState({
        //     isOpen: !this.state.isOpen
        // })
    }
}

export default Article