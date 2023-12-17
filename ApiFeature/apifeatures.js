class ApiFeatures{
    constructor(query,queryStr){
        this.query=query
        this.queryStr=queryStr
    }
    search() {
        if (this.queryStr.keyword) {
          const keywordQuery = {
            $or: [
              { category: { $regex: this.queryStr.keyword, $options: 'i' } },
              { subcategory: { $regex: this.queryStr.keyword, $options: 'i' } },
              { topic: { $regex: this.queryStr.keyword, $options: 'i' } },
            ],
          };
    
          this.query = this.query.find(keywordQuery);
        }
        return this;
      }
}   

module.exports=ApiFeatures