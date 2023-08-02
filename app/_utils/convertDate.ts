import {useTranslation} from "@/app/_i18n";

export default async function convertDate(dateStr: string, lng: string): Promise<string> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, 'date');
  const months: string[] = t('months', { returnObjects: true });
  const date = new Date(dateStr);
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}
