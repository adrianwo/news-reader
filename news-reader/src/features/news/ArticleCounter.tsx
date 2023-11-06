import { useAppSelector } from "../../app/hooks"
import { selectTotalResults } from "../../features/layout/layoutSlice"
import { useTranslation } from "react-i18next"

const ArticleCounter = () => {
  const totalResults = useAppSelector(selectTotalResults)
  const { t } = useTranslation()

  return (
    <div>
      {t("total articles")}: {totalResults}
    </div>
  )
}

export default ArticleCounter
