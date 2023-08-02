import {useTranslation} from "@/app/_i18n";

const convertDate = async (dateStr: string, lng: string): Promise<string> => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, 'date');
  const months: string[] = t('months', { returnObjects: true });
  const date = new Date(dateStr);
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

export default convertDate;
