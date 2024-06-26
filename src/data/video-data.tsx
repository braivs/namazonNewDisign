import React from "react"

export const video_data: Array<Video_data> = [
  {
    id: 51,
    youtubeID: '',
    color: "",
    img: "/assets/img/video/NC51.jpg",
    category: "Submission wrestling",
    title: "Kara, Darya, Tais. 08.05.2012",
    des: "This is a short video, but the price for the full version is not high. You can enjoy it)",
    description: (
      <>

      </>
    )
  },
  {
    id: 48,
    youtubeID: 'K_z4YsnNWbs',
    color: "",
    img: "/assets/img/video/NC48.jpg",
    category: "Submission wrestling",
    title: "Competitions Spring 2017",
    des: "Armwrestling & submission/pin grappling. Girls: Grigorenko Oksana (Tais), Murtazalieva Kurmandi, Piven Alyona.",
    description: (
      <p>
        Women&apos;s strength competition at 16.03.2017. Armwrestling & submission/pin grappling. Girls: Grigorenko
        Oksana
        (Tais), Murtazalieva Kurmandi, Piven Alyona.
      </p>
    )
  }
];
export default video_data;

export type Video_data = {
  id: number
  youtubeID: string
  color: string
  img: string
  category: string
  title: string
  des: string,
  description: React.ReactNode
}
