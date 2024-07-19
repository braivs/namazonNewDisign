import { NC33Desc } from '@/data/data-description/NC33Desc';
import { NC35Desc } from '@/data/data-description/NC35Desc';
import { NC36Desc } from '@/data/data-description/NC36Desc';
import { NC37Desc } from '@/data/data-description/NC37Desc';
import { NC41Desc } from '@/data/data-description/NC41Desc';
import { NC42Desc } from '@/data/data-description/NC42Desc';
import { NC44Desc } from '@/data/data-description/NC44Desc';
import {FC} from "react"
import {NC29Desc} from "@/data/data-description/NC29Desc"
import {NC27Desc} from "@/data/data-description/NC27Desc"
import {NC26Desc} from "@/data/data-description/NC26Desc"
import {NC24Desc} from "@/data/data-description/NC24Desc"
import {NC19Desc} from "@/data/data-description/NC19Desc"
import {NC16Desc} from "@/data/data-description/NC16Desc"
import {NC8Desc} from "@/data/data-description/NC8Desc"
import {NC6Desc} from "@/data/data-description/NC6Desc"
import {NC4Desc} from "@/data/data-description/NC4Desc"
import {NC3Desc} from "@/data/data-description/NC3Desc"
import withParameter from "@/common/HOCs/withParameter"
import {NC2Desc} from "@/data/data-description/NC2Desc"
import {NC1Desc} from "@/data/data-description/NC1Desc"

export const VIDEO_MAP: Record<number, FC> = {
    1: NC1Desc,
    2: NC2Desc,
    3: withParameter(NC3Desc, 3),
    4: NC4Desc,
    6: NC6Desc,
    8: NC8Desc,
    16: NC16Desc,
    19: NC19Desc,
    24: NC24Desc,
    26: NC26Desc,
    27: NC27Desc,
    29: NC29Desc,
    33: NC33Desc,
    35: NC35Desc,
    36: NC36Desc,
    37: NC37Desc,
    41: NC41Desc,
    42: NC42Desc,
    44: NC44Desc,
};
