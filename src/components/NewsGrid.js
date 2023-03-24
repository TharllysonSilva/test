/* eslint-disable no-undef */
import NewsItem from './NewsItem'

function NewsGrid({items}){
    return (
    <div className="news-grid">
        {items.map((items, i)(
            <NewsItem key={i} item={items}/>
        ))}
    </div>
    )
}

export default NewsGrid