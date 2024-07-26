import {FC} from "react"
import {tais2013Desc} from "@/data/girls-description/tais2013Desc"
import {kara_tellerDesc} from "@/data/girls-description/kara_tellerDesc"

export const GIRLS_MAP: Record<string, FC> = {
    'tais2013': tais2013Desc,
    'kara_teller': kara_tellerDesc,
};

