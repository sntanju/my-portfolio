import Image from 'next/image';
import Codechef from '@/public/onlineJudge/Codechef.png';
import Codeforces from '@/public/onlineJudge/Codeforces.svg';
import atCoder from '@/public/onlineJudge/atCoder.svg';
import lightOj from '@/public/onlineJudge/lightOj.png';
import leetcode from '@/public/onlineJudge/leetcode.svg';
import hackerearth from '@/public/onlineJudge/hackerearth.png';

export const ICON_SIZE = 24;
export const COMPETITIVE_PROGRAMING_HEADING = 'Competitive Programing';

export const competitiveProgramingDetails = [
  {
    name: 'LeetCode',
    topRating: 'Top rating 1372',
    participationInContest: 'Participated in 11 contest',
    totalSolve: 'Total 185+ prblem solved',
    link: 'https://leetcode.com/u/sntanju07/',
    icon: <Image src={leetcode} alt="leetcode" />,
  },
  {
    name: 'Codechef',
    topRating: 'Top rating 1426',
    participationInContest: 'Participated in 18+ contests',
    totalSolve: 'Total 400+ prblem solved',
    link: 'https://www.codechef.com/users/sntanju07',
    icon: (
      <Image
        src={Codechef}
        alt="codechef"
        width={ICON_SIZE}
        height={ICON_SIZE}
      />
    ),
  },
  {
    name: 'Codeforces',
    topRating: 'Top rating 1030',
    participationInContest: 'Participated in 60+ contests',
    totalSolve: 'Total 578+ prblem solved',
    link: 'https://codeforces.com/profile/sntanju07',
    icon: (
      <Image
        src={Codeforces}
        alt="codeforces"
        width={ICON_SIZE}
        height={ICON_SIZE}
      />
    ),
  },
  {
    name: 'At Coder',
    topRating: 'Top rating 200',
    participationInContest: 'Participated in 25+ contest',
    totalSolve: 'Total 60+ prblem solved',
    link: 'https://atcoder.jp/users/sntanju07',
    icon: (
      <Image src={atCoder} alt="atcoder" width={ICON_SIZE} height={ICON_SIZE} />
    ),
  },
  {
    name: 'HackerEarth',
    topRating: 'Top rating 1500',
    participationInContest: 'Participated in 10 contest',
    totalSolve: 'Total 30+ prblem solved',
    link: 'https://www.hackerearth.com/@sanjida9/',
    icon: (
      <Image src={hackerearth} alt="lightoj" width={ICON_SIZE} height={ICON_SIZE} />
    ),
  },
  {
    name: 'Light Oj',
    topRating: 'Top rating 0',
    participationInContest: 'Participated in 0 contest',
    totalSolve: 'Total 15+ prblem solved',
    link: 'https://lightoj.com/user/sntanju07',
    icon: (
      <Image src={lightOj} alt="lightoj" width={ICON_SIZE} height={ICON_SIZE} />
    ),
  },
];
