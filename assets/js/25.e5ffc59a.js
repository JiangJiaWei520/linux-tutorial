(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{478:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux-硬件管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-硬件管理"}},[s._v("#")]),s._v(" Linux 硬件管理")]),s._v(" "),a("blockquote",[a("p",[s._v("关键词："),a("code",[s._v("df")]),s._v(", "),a("code",[s._v("du")]),s._v(", "),a("code",[s._v("top")]),s._v(", "),a("code",[s._v("free")]),s._v(", "),a("code",[s._v("iotop")])])]),s._v(" "),a("h2",{attrs:{id:"_1-linux-硬件管理要点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-linux-硬件管理要点"}},[s._v("#")]),s._v(" 1. Linux 硬件管理要点")]),s._v(" "),a("ul",[a("li",[s._v("查看磁盘空间 - 使用 "),a("a",{attrs:{href:"#df"}},[s._v("df")])]),s._v(" "),a("li",[s._v("查看文件或目录的磁盘空间 - 使用 "),a("a",{attrs:{href:"#du"}},[s._v("du")])]),s._v(" "),a("li",[s._v("实时查看系统整体运行状态（如：CPU、内存） - 使用 "),a("a",{attrs:{href:"#top"}},[s._v("top")])]),s._v(" "),a("li",[s._v("查看已使用和未使用的内存 - 使用 "),a("a",{attrs:{href:"#free"}},[s._v("free")])]),s._v(" "),a("li",[s._v("查看磁盘 I/O 使用状况 - 使用 "),a("a",{attrs:{href:"#iotop"}},[s._v("iotop")])])]),s._v(" "),a("h2",{attrs:{id:"_2-命令常见用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令常见用法"}},[s._v("#")]),s._v(" 2. 命令常见用法")]),s._v(" "),a("h3",{attrs:{id:"_2-1-df"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-df"}},[s._v("#")]),s._v(" 2.1. df")]),s._v(" "),a("blockquote",[a("p",[s._v("df 命令用于显示磁盘分区上的可使用的磁盘空间。默认显示单位为 KB。可以利用该命令来获取硬盘被占用了多少空间，目前还剩下多少空间等信息。")]),s._v(" "),a("p",[s._v("参考：http://man.linuxde.net/df")])]),s._v(" "),a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看系统磁盘设备，默认是 KB 为单位")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@LinServ-1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# df")]),s._v("\n文件系统               1K-块        已用     可用 已用% 挂载点\n/dev/sda2            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("146294492")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28244432")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("110498708")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v("% /\n/dev/sda1              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1019208")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("62360")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("904240")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("% /boot\ntmpfs                  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1032204")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1032204")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /dev/shm\n/dev/sdb1            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2884284108")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("218826068")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2518944764")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("% /data1\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 -h 选项以 KB 以上的单位来显示，可读性高")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@LinServ-1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# df -h")]),s._v("\n文件系统              容量  已用 可用 已用% 挂载点\n/dev/sda2             140G   27G  106G  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v("% /\n/dev/sda1             996M   61M  884M   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("% /boot\ntmpfs                1009M     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 1009M   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /dev/shm\n/dev/sdb1             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".7T  209G  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".4T   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("% /data1\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看全部文件系统")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@LinServ-1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# df -a")]),s._v("\n文件系统               1K-块        已用     可用 已用% 挂载点\n/dev/sda2            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("146294492")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28244432")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("110498708")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v("% /\nproc                         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   -  /proc\nsysfs                        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   -  /sys\ndevpts                       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   -  /dev/pts\n/dev/sda1              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1019208")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("62360")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("904240")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("% /boot\ntmpfs                  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1032204")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1032204")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /dev/shm\n/dev/sdb1            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2884284108")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("218826068")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2518944764")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("% /data1\nnone                         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("   -  /proc/sys/fs/binfmt_misc\n")])])]),a("h3",{attrs:{id:"_2-2-du"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-du"}},[s._v("#")]),s._v(" 2.2. du")]),s._v(" "),a("blockquote",[a("p",[s._v("du 命令也是查看使用空间的，但是与 df 命令不同的是：du 命令是对文件和目录磁盘使用的空间的查看，还是和 df 命令有一些区别的。")]),s._v(" "),a("p",[s._v("参考：http://man.linuxde.net/du")])]),s._v(" "),a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示目录或者文件所占空间")]),s._v("\nroot@localhost "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# du")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("608")]),s._v(" ./test6\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("308")]),s._v(" ./test4\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" ./scf/lib\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" ./scf/service/deploy/product\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" ./scf/service/deploy/info\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" ./scf/service/deploy\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" ./scf/service\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" ./scf/doc\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" ./scf/bin\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" ./scf\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" ./test3\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1288")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示指定文件所占空间")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# du log2012.log")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v(" log2012.log\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看指定目录的所占空间")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# du scf")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" scf/lib\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" scf/service/deploy/product\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" scf/service/deploy/info\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" scf/service/deploy\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" scf/service\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" scf/doc\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" scf/bin\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" scf\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示多个文件所占空间")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# du log30.tar.gz log31.tar.gz")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" log30.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" log31.tar.gz\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只显示总和的大小")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# du -s")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1288")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# du -s scf")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" scf\n")])])]),a("h3",{attrs:{id:"_2-3-top"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-top"}},[s._v("#")]),s._v(" 2.3. top")]),s._v(" "),a("blockquote",[a("p",[s._v("top 命令可以实时动态地查看系统的整体运行情况，是一个综合了多方信息监测系统性能和运行信息的实用工具。通过 top 命令所提供的互动式界面，用热键可以管理。")]),s._v(" "),a("p",[s._v("参考：http://man.linuxde.net/top")])]),s._v(" "),a("h3",{attrs:{id:"_2-4-free"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-free"}},[s._v("#")]),s._v(" 2.4. free")]),s._v(" "),a("blockquote",[a("p",[s._v("free 命令可以显示当前系统未使用的和已使用的内存数目，还可以显示被内核使用的内存缓冲区。")]),s._v(" "),a("p",[s._v("参考：http://man.linuxde.net/free")])]),s._v(" "),a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" -t    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以总和的形式显示内存的使用信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 周期性的查询内存使用信息，每10s 执行一次命令")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示内存使用情况")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" -m\n             total       used       "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v("     shared    buffers     cached\nMem:          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2016")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1973")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("163")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1497")]),s._v("\n-/+ buffers/cache:        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("312")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1703")]),s._v("\nSwap:         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4094")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4094")]),s._v("\n")])])]),a("h3",{attrs:{id:"_2-5-iotop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-iotop"}},[s._v("#")]),s._v(" 2.5. iotop")]),s._v(" "),a("blockquote",[a("p",[s._v("iotop 命令是一个用来监视磁盘 I/O 使用状况的 top 类工具。iotop 具有与 top 相似的 UI，其中包括 PID、用户、I/O、进程等相关信息。Linux 下的 IO 统计工具如 iostat，nmon 等大多数是只能统计到 per 设备的读写情况，如果你想知道每个进程是如何使用 IO 的就比较麻烦，使用 iotop 命令可以很方便的查看。")]),s._v(" "),a("p",[s._v("参考：http://man.linuxde.net/iotop")])]),s._v(" "),a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Total DISK read:       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Total DISK write:       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s\n  TID  PRIO  "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("     DISK READ  DISK WRITE  SWAPIN     IO"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" be/4 root        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" %  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" % init "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" be/4 root        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" %  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" % "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("kthreadd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" rt/4 root        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" %  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" % "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("migration/0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" be/4 root        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" %  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" % "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ksoftirqd/0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" rt/4 root        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" %  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" % "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("watchdog/0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" rt/4 root        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" %  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" % "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("migration/1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" be/4 root        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" %  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" % "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ksoftirqd/1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" rt/4 root        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" %  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" % "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("watchdog/1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" be/4 root        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" %  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" % "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("events/0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" be/4 root        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" %  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" % "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("events/1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v(" be/4 root        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" %  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" % "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("khelper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2572")]),s._v(" be/4 root        "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" B/s  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" %  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" % "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("bluetooth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);