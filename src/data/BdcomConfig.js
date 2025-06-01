export const BDCOMConfigGuide = {
  title: 'BDCOM',
  sections: [
    {
      heading: 'Check konfigurasi OLT',
      content: ['show running-config']
    },
    {
      heading: 'Check semua Interface yang aktif di OLT',
      content: ['show interface brief']
    },
    {
      heading: 'Check ONT (f/s/p) dengan SID/Nama User',
      content: ['show gpon onu-description']
    },
    {
      heading: 'Check ONT (f/s/p) dengan MAC Address ONT',
      content: ['show mac address-table [mac-id]']
    },
    {
      heading: 'Check Creation Info Status ONT (f/s/p) dengan Serial Number',
      content: ['show gpon onu-information sn [serial number ONT]']
    },
    {
      heading: 'Check Status ONT pada 1 Port Tertentu',
      content: [
        'show gpon onu-information interface gpoN [interface]/[port]',
        'show gpon onu-description interface gpoN [interface]/[port]'
      ]
    },
    {
      heading: 'Check Semua Info Status ONT di 1 OLT',
      content: ['show gpon onu-information']
    },
    {
      heading: 'Check Semua Info Status ONT di 1 OLT (Hanya yang Active)',
      content: ['show gpon active-onu']
    },
    {
      heading: 'Check Semua Info Status ONT di 1 OLT (Hanya yang Inactive)',
      content: ['show gpon inactive-onu']
    },
    {
      heading: 'Check Status/LOG ONT (Basic Info)',
      content: ['show gpon interface gpoN [interface]/[port]:[onu-id] onu basic-info']
    },
    {
      heading: 'Check WAN Status/IPHOST',
      content: ['show gpon interface gpoN [interface]/[port]:[onu-id] onu wan 1 config']
    },
    {
      heading: 'Check Redaman/Optical Power ONT',
      content: ['show gpon interface gpoN [interface]/[port]:[onu-id] onu optical-transceiver-diagnosis']
    },
    {
      heading: 'Check Redaman/Optical Power 1 Port OLT',
      content: ['show gpon onu-optical-transceiver-diagnosis interface gpoN [interface]/[port]']
    },
    {
      heading: 'Check Semua MAC Address yang terbinding di OLT',
      content: ['show mac address-table']
    },
    {
      heading: 'Check MAC Address ONT Tertentu',
      content: ['show mac address-table interface gpoN [interface]/[port]:[onu-id]']
    },
    {
      heading: 'Check MAC Address ONT pada 1 port OLT',
      content: ['show mac address-table interface gpoN [interface]/[port]']
    },
    {
      heading: 'Check MAC Address ONT pada VLAN tertentu',
      content: ['show mac address-table vlan [vlan-id]']
    },
    {
      heading: 'Check SSID/WiFi Config ONT',
      content: ['show gpon interface gpoN [interface]/[port]:[onu-id] onu wifi 1 config']
    },
    {
      heading: 'Check Status Lan Port di ONT',
      content: ['show gpon interface gpoN [interface]/[port]:[onu-id] onu port [LAN-ID] state']
    },
    {
      heading: 'Check Flow Mapping Profile All',
      content: ['show gpon onu-flow-mapping-profile']
    },
    {
      heading: 'Check Redaman Port/DDM Detail',
      content: ['show interface gpoN [interface]/[port]']
    },
    {
      heading: 'Check Total User Dalam 1 OLT',
      content: ['show gpon onu-status-count']
    },
    {
      heading: 'Save konfigurasi OLT',
      content: ['write all']
    },
    {
      heading: 'Reboot ONT yang terconfig di OLT',
      content: ['gpon reboot onu interface gpoN [interface]/[port]:[onu-id]']
    },
    {
      heading: 'Reboot OLT',
      content: ['reboot noconfirm']
    },
    {
      heading: 'Set WAN Config/VLAN Config ONT',
      content: [
        'config',
        'interface gpoN [interface]/[port]:[onu-id]',
        'gpon onu wan 1 tci vlan [vlan-id]',
        'gpon onu wan 1 connection-type dhcp',
        'gpon onu wan 1 service-type internet',
        'gpon onu wan 1 bind lan1 lan2 ssid1',
        'gpon onu wan 1 nat enable'
      ]
    },
    {
      heading: 'Bind ONU/Register',
      content: [
        'config',
        'interface gpoN [interface]/[port]',
        'gpon bind-onu sequence [onu-id] atau',
        'gpon bind-onu sn [serial-number]',
        'quit',
        'quit',
        'write all'
      ]
    },
    {
      heading: 'Unbind ONU/Deregister',
      content: [
        'config',
        'interface gpoN [interface]/[port]',
        'no gpon bind-onu sequence [onu-id] atau',
        'no gpon bind-onu sn [serial-number]',
        'quit',
        'quit',
        'write all'
      ]
    },
    {
      heading: 'Set Flow Mapping Profile ONT (untuk crossbrand)',
      content: [
        'config',
        'interface gpoN [interface]/[port]:[ont-id]',
        'gpon onu flow-mapping-profile [flowmapping-name]'
      ]
    },
    {
      heading: 'Set SSID/WiFi di ONT',
      content: [
        'config',
        'interface gpoN [interface]/[port]:[ont-id]',
        'gpon onu wifi 2.4G ssid 1 ssid-name [nama-ssid]',
        'gpon onu wifi 2.4G ssid 1 encrypt-key [password-ssid]'
      ]
    },
    {
      heading: 'Jika status ONT Inactive',
      content: [
        'config',
        'interface gpoN [interface]/[port]',
        'gpon transceiver any-reset-preamble'
      ]
    },
    {
      heading: 'CHEAT REGISTER ONT BDCOM (IPoE)',
      content: [
        'config',
        'interface GPON 0/1:2',
        'description 04000176480-JHONI.NELWAN',
        'write all',
        'config',
        'interface gpon 0/13:3',
        'gpon onu wan 1 admin-status enable',
        'gpon onu wan 1 nat enable',
        'gpon onu wan 1 tci vlan 2889',
        'gpon onu wan 1 connection-type dhcp',
        'gpon onu wan 1 service-type internet',
        'gpon onu wan 1 bind lan1 lan2 ssid1',
        'gpon onu wan 1 auto-get-dns-address enable',
        'gpon onu wan 1 lan-dhcp enable',
        'write all'
      ]
    },
    {
      heading: 'CHEAT REGISTER ONT BDCOM (PPPoE)',
      content: [
        'config',
        'interface gpON 0/11:12',
        'description 131000921282-SURATIN',
        'gpon onu wan 1 admin-status enable',
        'gpon onu wan 1 nat enable',
        'gpon onu wan 1 service-type internet',
        'gpon onu wan 1 connection-type pppoe',
        'gpon onu wan 1 pppoe username 4244434D0F0114F0 password 20230901',
        'gpon onu wan 1 tci vlan 2917',
        'gpon onu wan 1 bind lan1 lan2 lan3 lan4 ssid1',
        'gpon onu wan 1 auto-get-dns-address enable',
        'gpon onu wan 1 lan-dhcp enable',
        'quit',
        'write all'
      ]
    }
  ]
};
