const huaweiPPPoETemplate = ({ 
  serialNumber, 
  sid, 
  ontId, 
  vlanId, 
  lineProfile, 
  srvProfile, 
  f, 
  s, 
  p, 
  date 
}) => `
config
interface gpon ${f}/${s}
ont add ${p} ${ontId} sn-auth ${serialNumber} omci ont-lineprofile-id ${lineProfile} ont-srvprofile-id ${srvProfile} desc ${sid.replace(/\s+/g, '')}
ont ipconfig ${p} ${ontId} pppoe vlan ${vlanId} priority 0 user-account username ${serialNumber} password ${date}
ont internet-config ${p} ${ontId} ip-index 0
ont wan-config ${p} ${ontId} ip-index 0 profile-name ICONNET.AUTOPROV
ont policy-route-config ${p} ${ontId} profile-name ICONNET.AUTOPROV
ont port route ${p} ${ontId} eth 1 enable
ont port route ${p} ${ontId} eth 2 enable
quit
service-port vlan ${vlanId} gpon ${f}/${s}/${p} ont ${ontId} gemport 1 multi-service user-vlan ${vlanId} tag-transform translate
quit
`;

const raisecomPPPoETemplate = ({
  serialNumber,
  sid,
  ontId,
  vlanId,
  lineProfile,
  f,
  s,
  date
}) => `
config
interface gpon-olt ${f}/${s}
create gpon-onu ${ontId} sn ${serialNumber} line-profile-id ${lineProfile} service-profile-id 1
quit
interface gpon-onu ${f}/${s}/${ontId}
description ${sid.replace(/\s+/g, '.')}
quit
gpon-onu ${f}/${s}/${ontId}
iphost 1 mode pppoe
iphost 1 pppoe username ${serialNumber}  password ${date}
iphost 1 vlan ${vlanId}
iphost 1 service mode route nat enable cos 0 portlist 1,2 ssidlist 1
iphost 1 service internet
end
write startup-config
`;

const zteC320PPPoETemplate = ({
  serialNumber,
  sid,
  ontId,
  vlanId,
  f,
  s,
  p,
  date
}) => `
config t
int gpon-olt_${f}/${s}/${p}
onu ${ontId} type ZTEG-F609 sn ${serialNumber}
exit
int gpon-onu_${f}/${s}/${p}:${ontId}
description ${sid.replace(/\s+/g, '')}
sn-bind enable sn
tcont 1 name HSI profile PPPOE
gemport 1 name HSI tcont 1
service-port 1 vport 1 user-vlan ${vlanId} vlan ${vlanId}
exit
pon-onu-mng gpon-onu_${f}/${s}/${p}:${ontId}
service HSI gemport 1 vlan ${vlanId}
wan-ip 1 mode pppoe username ${serialNumber} password ${date} vlan-profile vlan${vlanId} host 1
vlan port eth_0/1 mode tag vlan ${vlanId}
vlan port eth_0/2 mode tag vlan ${vlanId}
wan 1 ssid 1 ethuni 1,2 service internet host 1
end
write
`;

const zteC610PPPoETemplate = ({ 
  serialNumber, 
  sid, 
  ontId, 
  vlanId, 
  f, 
  s, 
  p, 
  date 
}) => `
config t
interface gpon-olt_${f}/${s}/${p}
onu ${ontId} type ZTEG-F609 sn ${serialNumber}
exit
interface gpon_onu-${f}/${s}/${p}:${ontId}
description ${sid.replace(/\s+/g, '')}
tcont 1 name HSI profile PPPOE
gemport 1 name HSI tcont 1
exit
interface vport-${f}/${s}/${p}.${ontId}:1
service-port 1 user-vlan ${vlanId} vlan ${vlanId}
exit
pon-onu-mng gpon_onu-${f}/${s}/${p}:${ontId}
service HSI gemport 1 vlan ${vlanId}
wan-ip ipv4 mode pppoe username ${serialNumber} password ${date} vlan-profile wan${vlanId} host 1
vlan port eth_0/1 mode tag vlan ${vlanId}
vlan port eth_0/2 mode tag vlan ${vlanId}
vlan port eth_0/3 mode tag vlan ${vlanId}
wan 1 ssid 1 ethuni 1,2 service internet host 1
end
write
`;

const bdcomPPPoETemplate = ({
  serialNumber,
  sid,
  vlanId,
  date,
  f,
  s,
  p
}) => `
config
interface gpON ${f}/${s}:${p}
description ${sid.replace(/\s+/g, '.')}
quit
config
interface gpON ${f}/${s}:${p}
gpon onu wan 1 admin-status enable
gpon onu wan 1 nat enable
gpon onu wan 1 service-type internet
gpon onu wan 1 connection-type pppoe
gpon onu wan 1 pppoe username ${serialNumber} password ${date}
gpon onu wan 1 tci vlan ${vlanId}
gpon onu wan 1 bind lan1 lan2 ssid1
gpon onu wan 1 auto-get-dns-address enable
gpon onu wan 1 lan-dhcp enable
quit
quit
write all
`;

export const configTemplates = {
  huawei: huaweiPPPoETemplate,
  raisecom: raisecomPPPoETemplate,
  zte_c320: zteC320PPPoETemplate,
  zte_c610: zteC610PPPoETemplate,
  bdcom: bdcomPPPoETemplate
};



