import React from "react";
import FirstSection from "../FirstSection";
import IpadMacSection from "../IpadMacSection";
import IphoneproSection from "../IphoneproSection";
import Iphone11Section from "../Iphone11Section";
import AppletvandwatchSection from "../AppletvandwatchSection";
import AcardSection from "../AcardSection";
import YoutubeVideos from "../YoutubeVideos";
export default function Home() {
	return (
		<>
			<FirstSection />
			<IpadMacSection />
			<IphoneproSection />
			<Iphone11Section />
			<AppletvandwatchSection />
			<AcardSection />
			<YoutubeVideos/>
		</>
	);
}
