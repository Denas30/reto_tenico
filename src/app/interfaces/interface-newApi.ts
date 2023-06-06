

export interface ISource {
    id?: string,
    name: string
}

export interface INewApi {
     author: string,
     title: string,
     description: string,
     url?: string,
     urlToImage?: string,
     publishedAt: number,
     content: string,
     source: ISource[],
    
}

export interface IArticles {
     status: string,
     totalResults?: number,
     articles: INewApi[]
 }

