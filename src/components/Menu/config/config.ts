import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Stake'),
    href: '/farms',
    icon: 'Earn',
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Pools'),
        href: '/pools',
      },
    ],
  },
  {
    label: t('NFT'),
    href: '/collectibles',
    icon: 'Nft',
    items: [
      {
        label: 'Home',
        href: '/collectibles',
      },
      {
        label: 'Explore',
        href: '/collectibles',
      },
      {
        label: 'Sell',
        href: '/collectibles',
      },
      {
        label: 'Mint',
        href: '/collectibles',
      },
    ],
  },
  {
    label: 'Play!',
    href: '/farms',
    icon: 'Earn',
    items: [
      {
        label: 'Lottery',
        href: '/farms',
      },
      {
        label: 'Bets',
        href: '/pools',
      },
      {
        label: 'The BFC',
        href: '/pools',
      },
    ],
  },
  {
    label: 'Ecosystem!',
    href: '/farms',
    icon: 'Earn',
    items: [
      {
        label: 'Infos',
        href: '/farms',
      },
      {
        label: 'Algo perfs',
        href: '/pools',
      },
      {
        label: 'The Barry Foundation',
        href: '/pools',
      },
    ],
  },

  {
    label: '',
    href: '/info',
    icon: 'More',
    hideSubNav: true,
    items: [
      {
        label: '#BERNARMY',
        href: 'https://docs.pancakeswap.finance',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Voting'),
        href: 'https://docs.pancakeswap.finance',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: 'Merge Voting',
        href: 'https://docs.pancakeswap.finance',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
    ],
  },
]

export default config
