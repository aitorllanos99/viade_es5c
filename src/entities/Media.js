import React from "react";

class Media {

	constructor(contentUrl, author, publicationTime,type) {
		this.contentUrl = contentUrl;
		this.author = author;
		
		this.publicationTime = publicationTime;
        this.type=type;
	}

	getUrl() {
		if (!this.media) {
			return;
		}
		return URL.createObjectURL(this.media);
	}

	getComponent() {
        if (this.type==="video"){
            return <video controls className="d-block route-img" src={this.getUrl()}/>;
        }else if(this.type==="image"){
            return <img className="d-block route-img" src={this.getUrl()} alt={this.author} />;
        }
		
	}
}

export default Media;