import {useRouter} from 'next/router'
import ElementDetails from "@/common/element-details/element-details"
import React from "react"
import {girls_data_all, girls_data_blank} from "@/data/girls_data/girls-data"
import {GirlData} from "@/common/types"
import GirlsData from "@/components/girls/girls-data/girls-data"

function VideoComponent() {
  const router = useRouter()
  const {girlId} = router.query

  const girlData: GirlData | undefined = girlId ? girls_data_all.find((item) => item.id === girlId) : girls_data_blank

  return (
    <ElementDetails>
      <GirlsData GirlData={girlData}/>
    </ElementDetails>
  )
}

export const getStaticPaths = async () => {
  const paths = girls_data_all.map(girl => ({
    params: {girlId: girl.id}
  }))

  return {
    paths,
    fallback: false
    // If the page with the videoId is not found, returns 404 page
  }
}

export async function getStaticProps({params}: Params) {
  const {girlId} = params
  
  const Video = {
    id: girlId,
  }

  return {
    props: {
      Video,
    },
  }
}

type Params = {
  params: {
    girlId: string;
  };
};

export default VideoComponent