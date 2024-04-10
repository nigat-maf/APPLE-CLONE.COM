import React, { useState, useEffect } from "react";
import "../commonResource/css/YouTub.css";

export default function YoutubeVideos() {
	let [data, setdata] = useState([]);
	useEffect(() => {
		fetch(
			"https://www.googleapis.com/youtube/v3/search?key=AIzaSyA6MBU5KyYQAIEfsN1PtwIez3L3rybDAN8&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9"
		)
			.then((response) => response.json())
			.then((mydata) => {
				const fechData = mydata.items;
				setdata(fechData);
				console.log(fechData); //checks if data is fetched
			});
	}, []);
	console.log(data);
	return (
		<div className="youtubeVideosWrapper">
			<div className="container">
				<div className="row h-100 align-items-center justify-content-center text-center">
					<div className="col-12">
						<div className="title-wraper bold video-title-wrapper">
							Latest Videos
						</div>
					</div>
					{data?.map((singleVideo, i) => {
						let vidId = singleVideo.id.videoId;
						let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
						let wrapper = (
							<div key={i} className="col-sm-12 col-md-4">
								<div className="singleVideoWrapper">
									<div className="videoThumbnail">
										<a href={vidLink} target="_blank">
											<img src={singleVideo.snippet.thumbnails.high.url} />
										</a>
									</div>
									<div className="videoInfoWrapper">
										<div className="videoTitle">
											<a href={vidLink} target="_blank">
												{singleVideo.snippet.title}
											</a>
										</div>
										<div className="videoDesc">
											{singleVideo.snippet.description}
										</div>
									</div>
								</div>
							</div>
						);
						return wrapper;
					})}
				</div>
			</div>
		</div>
	);
}
