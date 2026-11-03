// import React, { Component, Suspense } from "react";
// import Lottie from "react-lottie";
// import Loading from "../../containers/loading/Loading";

// export default class DisplayLottie extends Component<{ animationData: any }> {
//   render() {
//     const animationData = this.props.animationData;
//     const defaultOptions = {
//       loop: true,
//       autoplay: true,
//       animationData: animationData
//     };

//     return (
//       <Suspense fallback={<Loading />}>
//         <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
//       </Suspense>
//     );
//   }
// }

// "use client";

// import React, { Component } from "react";
// import dynamic from "next/dynamic";
// import Loading from "../../containers/loading/Loading";

// const Lottie = dynamic(() => import("react-lottie"), {
//   ssr: false,
//   loading: () => <Loading />,
// });

// export default class DisplayLottie extends Component<{
//   animationData: any;
// }> {
//   render() {
//     const animationData = this.props.animationData;

//     const defaultOptions = {
//       loop: true,
//       autoplay: true,
//       animationData: animationData,
//     };

//     return (
//       <Lottie
//         options={defaultOptions}
//         isClickToPauseDisabled={true}
//       />
//     );
//   }
// }

"use client";

import React from "react";
import dynamic from "next/dynamic";
import Loading from "../../containers/loading/Loading";

const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false,
  loading: () => <Loading />,
});

interface DisplayLottieProps {
  animationData: any;
}

export default function DisplayLottie({
  animationData,
}: DisplayLottieProps) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet",
    },
  };

  return (
    <Lottie
      options={defaultOptions}
      isClickToPauseDisabled={true}
      eventListeners={[]}
    />
  );
}
