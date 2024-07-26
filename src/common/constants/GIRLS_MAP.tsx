import {FC} from "react"
import {tais2013Desc} from "@/data/girls-description/tais2013Desc"
import {kara_tellerDesc} from "@/data/girls-description/kara_tellerDesc"
import {ElenaVasileva2013Desc} from "@/data/girls-description/elena_vasileva2013Desc"
import {DaryaBalinaDesc} from "@/data/girls-description/darya_balinaDesc"

export const GIRLS_MAP: Record<string, FC> = {
    'tais2013': tais2013Desc,
    'kara_teller': kara_tellerDesc,
    'elena_vasileva2013': ElenaVasileva2013Desc,
    'darya_balina': DaryaBalinaDesc,
};

