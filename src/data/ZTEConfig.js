export const ZTECommandGuide = {
  title: 'ZTE',
  sections: [
    {
      heading: 'Check konfigurasi OLT',
      content: ['show running-config'],
    },
    {
      heading: 'Check konfigurasi ONT',
      content: [
        'show running-config',
        'interface gpon_onu-[f]/[s]/[p]:[ont-id]',
        'show onu running-config gpon_onu-[f]/[s]/[p]:[ont-id]',
      ],
    },
    {
      heading: 'Check ONT by SN',
      content: ['show gpon onu by sn [..serialnumber..]'],
    },
    {
      heading: 'Check Status ONT',
      content: ['show gpon onu detail-info gpon_onu-[f]/[s]/[p]:[ont-id]'],
    },
    {
      heading: 'Check Status ONT di satu port',
      content: [
        'show gpon onu state gpon_olt-[f]/[s]/[p]',
        'show pon onu information gpon_olt-[f]/[s]/[p]',
      ],
    },
    {
      heading: 'Check Log History ONT',
      content: ['show pon onu information gpon_onu-[f]/[s]/[p]:[ont-id]'],
    },
    {
      heading: 'Check Redaman',
      content: ['show pon power attenuation gpon_onu-[f]/[s]/[p]:[ont-id]'],
    },
    {
      heading: 'Check Redaman Satu Port',
      content: ['show pon power onu-rx gpon_olt-[f]/[s]/[p]'],
    },
    {
      heading: 'Check WAN Status / IP Binding',
      content: ['show gpon remote-onu wan-ip gpon_onu-[f]/[s]/[p]:[ont-id]'],
    },
    {
      heading: 'Check LAN Port ONT',
      content: ['show gpon remote-onu interface eth gpon_onu-[f]/[s]/[p]:[ont-id]'],
    },
    {
      heading: 'Check Threshold/DDM',
      content: ['show optical-module-info gpon_olt-[f]/[s]/[p]:[ont-id]'],
    },
    {
      heading: 'Check Traffic Port OLT',
      content: ['show interface gpon_olt-[f]/[s]/[p]'],
    },
    {
      heading: 'Check Format Terminasi IPOE',
      content: ['show running-config | include index'],
    },
    {
      heading: 'Check SSID Info (C320)',
      content: ['show gpon remote-onu ssid info gpon-onu_[f]/[s]/[p]:[ont-id]'],
    },
    {
      heading: 'Check WIFI Info (C320)',
      content: ['show gpon remote-onu wifi info gpon-onu_[f]/[s]/[p]:[ont-id]'],
    },
    {
      heading: 'Check MAC Address per VLAN',
      content: [
        'show mac vlan [vlan-id]',
        'show mac gpon onu gpon-onu_1/2/12:38',
      ],
    },
    {
      heading: 'Check MAC Address per Port',
      content: ['show mac gpon olt gpon-olt_[f]/[s]/[p]'],
    },
    {
      heading: 'Check ONT Unconfigured',
      content: ['show gpon onu uncnfg'],
    },
    {
      heading: 'Check Uptime OLT',
      content: ['show system-group'],
    },
    {
      heading: 'Check VLAN',
      content: ['show vlan summary'],
    },
    {
      heading: 'Check versi ONT',
      content: ['show gpon remote-onu equip gpon-onu [f]/[s]/[p]:[ont-id]'],
    },
    {
      heading: 'Check IGMP IPTV',
      content: ['show igmp dynamic-member sn'],
    },
    {
      heading: 'Reboot ONT',
      content: [
        'config',
        'pon-onu-mng gpon_onu-[f]/[s]/[p]:[ont-id]',
        'reboot',
      ],
    },
    {
      heading: 'Delete ONT (Unregist)',
      content: [
        'configure terminal',
        'interface gpon_olt-[f]/[s]/[p]',
        'no onu [ont-id]',
        'end',
        'write',
      ],
    },
    {
      heading: 'Enable/Shutdown Port LAN',
      content: [
        'configure terminal',
        'pon-onu-mng gpon_onu-[f]/[s]/[p]:[ont-id]',
        'interface eth eth_[Port-LAN] state [unlock/lock]',
      ],
    },
    {
      heading: 'Reset ONT',
      content: [
        'configure terminal',
        'pon-onu-mng gpon_onu-[f]/[s]/[p]:[ont-id]',
        'restore factory',
      ],
    },
    {
      heading: 'Ganti SSID/Wifi Password (C320)',
      content: [
        'config t',
        'pon-onu-mng gpon-onu_1/1/7:42',
        'ssid ctrl wifi_0/1 name ALWI',
        'ssid auth wpa wifi_0/1 wpa-psk encrypt tkip key 12345678',
      ],
    },
  ],
};
