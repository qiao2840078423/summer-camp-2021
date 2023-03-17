# HTML

- 默认的被链接文档会在原有的窗口中打开的，如果将 target 属性设置为 "_blank" 则文档就会在新窗口打开

- <table>
      <tbody>
          <tr>
              <th>标签</th>
              <th>描述</th>
          </tr>
          <tr>
              <td>&lt;abbr&gt;</td>
              <td>定义缩写或首字母缩略语。</td>
          </tr>
          <tr>
              <td>&lt;address&gt;</td>
              <td>定义文档作者或拥有者的联系信息。</td>
          </tr>
          <tr>
              <td>&lt;bdo&gt;</td>
              <td>定义文本方向。</td>
          </tr>
          <tr>
              <td>&lt;blockquote&gt;</td>
              <td>定义从其他来源引用的节。</td>
          </tr>
          <tr>
              <td>&lt;dfn&gt;</td>
              <td>定义项目或缩略词的定义。</td>
          </tr>
          <tr>
              <td>&lt;q&gt;</td>
              <td>定义短的行内引用。</td>
          </tr>
          <tr>
              <td>&lt;cite&gt;</td>
              <td>定义著作的标题。</td>
          </tr>
      </tbody>
  </table>

- 通过id和链接实现HTML标签

- <table>
          <tbody>
              <tr>
                  <th width="20%" align="left" style="text-align: center;">标签</th>
                  <th width="80%" align="left" style="text-align: center;">描述</th>
              </tr>
              <tr>
                  <td style="text-align: center;">&lt;head&gt;
                  </td>
                  <td style="text-align: center;">定义了文档的信息</td>
              </tr>
              <tr>
                  <td style="text-align: center;">&lt;title&gt;
                  </td>
                  <td style="text-align: center;">定义了文档的标题</td>
              </tr>
              <tr>
                  <td style="text-align: center;">&lt;base&gt;
                  </td>
                  <td style="text-align: center;">定义了页面链接标签的默认链接地址</td>
              </tr>
              <tr>
                  <td style="text-align: center;">&lt;link&gt
                  </td>
                  <td style="text-align: center;">定义了一个文档和外部资源之间的关系</td>
              </tr>
              <tr>
                  <td style="text-align: center;">&lt;meta&gt;
                  </td>
                  <td style="text-align: center;">定义了HTML文档中的元数据</td>
              </tr>
              <tr>
                  <td style="text-align: center;">&lt;script&gt;
                  </td>
                  <td style="text-align: center;">定义了客户端的脚本文件</td>
              </tr>
              <tr>
                  <td style="text-align: center;">&lt;style&gt;
                  </td>
                  <td style="text-align: center;">定义了HTML文档的样式文件</td>
              </tr>
          </tbody>
      </table>

- <table class="reference">
          <tbody>
              <tr class="firstRow">
                  <th align="left" style="text-align: center;">标签</th>
                  <th align="left" style="text-align: center;">描述</th>
              </tr>
              <tr>
                  <td style="text-align: center;">&lt;table&gt;
                  </td>
                  <td style="text-align: center;">定义表格</td>
              </tr>
              <tr>
                  <td style="text-align: center;">&lt;th&gt;
                  </td>
                  <td style="text-align: center;">定义表格的表头</td>
              </tr>
              <tr>
                  <td style="text-align: center;">&lt;tr&gt;
                  </td>
                  <td style="text-align: center;">定义表格的行</td>
              </tr>
              <tr>
                  <td style="text-align: center;">&lt;td&gt;
                  </td>
                  <td style="text-align: center;">定义表格单元</td>
              </tr>
              <tr>
                  <td style="text-align: center;">&lt;caption&gt;
                  </td>
                  <td style="text-align: center;">定义表格标题</td>
              </tr>
              <tr>
                  <td style="text-align: center;">&lt;colgroup&gt;
                  </td>
                  <td style="text-align: center;">定义表格列的组</td>
              </tr>
              <tr>
                  <td style="text-align: center;">&lt;col&gt;
                  </td>
                  <td style="text-align: center;">定义用于表格列的属性</td>
              </tr>
              <tr>
                  <td style="text-align: center;">&lt;thead&gt;
                  </td>
                  <td style="text-align: center;">定义表格的页眉</td>
              </tr>
              <tr>
                  <td style="text-align: center;">&lt;tbody&gt;
                  </td>
                  <td style="text-align: center;">定义表格的主体</td>
              </tr>
              <tr>
                  <td style="text-align: center;">&lt;tfoot&gt;
                  </td>
                  <td style="text-align: center;">定义表格的页脚</td>
              </tr>
          </tbody>
      </table>

- `iframe`可以显示一个目标链接的页面，目标链接的属性必须使用`iframe`的属性

- <table class="reference">
      <tbody>
          <tr>
              <th style="text-align: center; width: 20%;">显示结果</th>
              <th style="text-align: center; width: 20%;">描述</th>
              <th style="text-align: center; width: 30%;">实体名称</th>
              <th style="text-align: center; width: 30%;">实体编号</th>
          </tr>
          <tr>
              <td style="text-align: center;">&nbsp;</td>
              <td style="text-align: center;">空格</td>
              <td style="text-align: center;">&amp;nbsp;</td>
              <td style="text-align: center;">&amp;#160;</td>
          </tr>
          <tr>
              <td style="text-align: center;">&lt;</td>
              <td style="text-align: center;">小于号</td>
              <td style="text-align: center;">&amp;lt;</td>
              <td style="text-align: center;">&amp;#60;</td>
          </tr>
          <tr>
              <td style="text-align: center;">&gt;</td>
              <td style="text-align: center;">大于号</td>
              <td style="text-align: center;">&amp;gt;</td>
              <td style="text-align: center;">&amp;#62;</td>
          </tr>
          <tr>
              <td style="text-align: center;">&amp;</td>
              <td style="text-align: center;">和号</td>
              <td style="text-align: center;">&amp;amp;</td>
              <td style="text-align: center;">&amp;#38;</td>
          </tr>
          <tr>
              <td style="text-align: center;">"</td>
              <td style="text-align: center;">引号</td>
              <td style="text-align: center;">&amp;quot;</td>
              <td style="text-align: center;">&amp;#34;</td>
          </tr>
          <tr>
              <td style="text-align: center;">'</td>
              <td style="text-align: center;">撇号&nbsp;</td>
              <td style="text-align: center;">&amp;apos; (IE不支持)</td>
              <td style="text-align: center;">&amp;#39;</td>
          </tr>
          <tr>
              <td style="text-align: center;">￠</td>
              <td style="text-align: center;">分</td>
              <td style="text-align: center;">&amp;cent;</td>
              <td style="text-align: center;">&amp;#162;</td>
          </tr>
          <tr>
              <td style="text-align: center;">£</td>
              <td style="text-align: center;">镑</td>
              <td style="text-align: center;">&amp;pound;</td>
              <td style="text-align: center;">&amp;#163;</td>
          </tr>
          <tr>
              <td style="text-align: center;">¥</td>
              <td style="text-align: center;">人民币/日元</td>
              <td style="text-align: center;">&amp;yen;</td>
              <td style="text-align: center;">&amp;#165;</td>
          </tr>
          <tr>
              <td style="text-align: center;">€</td>
              <td style="text-align: center;">欧元</td>
              <td style="text-align: center;">&amp;euro;</td>
              <td style="text-align: center;">&amp;#8364;</td>
          </tr>
          <tr>
              <td style="text-align: center;">§</td>
              <td style="text-align: center;">小节</td>
              <td style="text-align: center;">&amp;sect;</td>
              <td style="text-align: center;">&amp;#167;</td>
          </tr>
          <tr>
              <td style="text-align: center;">©</td>
              <td style="text-align: center;">版权</td>
              <td style="text-align: center;">&amp;copy;</td>
              <td style="text-align: center;">&amp;#169;</td>
          </tr>
          <tr>
              <td style="text-align: center;">®</td>
              <td style="text-align: center;">注册商标</td>
              <td style="text-align: center;">&amp;reg;</td>
              <td style="text-align: center;">&amp;#174;</td>
          </tr>
          <tr>
              <td style="text-align: center;">™</td>
              <td style="text-align: center;">商标</td>
              <td style="text-align: center;">&amp;trade;</td>
              <td style="text-align: center;">&amp;#8482;</td>
          </tr>
          <tr>
              <td style="text-align: center;">×</td>
              <td style="text-align: center;">乘号</td>
              <td style="text-align: center;">&amp;times;</td>
              <td style="text-align: center;">&amp;#215;</td>
          </tr>
          <tr>
              <td style="text-align: center;">÷</td>
              <td style="text-align: center;">除号</td>
              <td style="text-align: center;">&amp;divide;</td>
              <td style="text-align: center;">&amp;#247;</td>
          </tr>
      </tbody>
  </table>

  