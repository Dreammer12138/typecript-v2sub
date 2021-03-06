/**
 * Shadowsocks 协议，包含入站和出站两部分，兼容大部分其它版本的实现
 * 与官方版本的兼容性：
 * - 支持 TCP 和 UDP 数据包转发，其中 UDP 可选择性关闭；
 * - 支持 OTA；
 * ----- 客户端可选开启或关闭；
 * ----- 服务器端可强制开启、关闭或自适应；
 * - 加密方式（其中 AEAD 加密方式在 V2Ray 3.0 中加入）：
 * ----- aes-256-cfb
 * ----- aes-128-cfb
 * ----- chacha20
 * ----- chacha20-ietf
 * ----- aes-256-gcm
 * ----- aes-128-gcm
 * ----- chacha20-poly1305 或称 chacha20-ietf-poly1305
 * - 插件：
 * ----- 通过 Standalone 模式支持 obfs
 */
export declare class shadowsocks_inbound {
    method: string;
    password: string;
    ota: boolean;
    network: string;
    /**
     *
     * @param password 密码
     * @param method 加密方法
     * ------ aes-256-cfb
     * ------ aes-128-cfb
     * ------ chacha20
     * ------ chacha20-ietf
     * ------ aes-256-gcm
     * ------ aes-128-gcm
     * ------ chacha20-poly1305
     * @param network 可接收的网络连接类型，默认值为"tcp"
     *
     */
    constructor(password: string, method?: string, network?: string);
}
export declare class shadowsocks_outbound {
    servers: {
        address: string;
        port: number;
        method: string;
        password: string;
        ota: boolean;
    }[];
    /**
     *
     * @param address 服务器地址
     * @param port 服务器端口
     * @param password 密码
     * @param method 加密方法
     * ------ aes-256-cfb
     * ------ aes-128-cfb
     * ------ chacha20
     * ------ chacha20-ietf
     * ------ aes-256-gcm
     * ------ aes-128-gcm
     * ------ chacha20-poly1305
     *
     */
    constructor(address: string, port: number, password: string, method?: string);
}
