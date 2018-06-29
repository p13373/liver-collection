/*
 * @Author: zy9@github.com/zy410419243 
 * @Date: 2018-06-08 11:13:09 
 * @Last Modified by: zy9
 * @Last Modified time: 2018-06-29 16:02:17
 * @Description 全局样式设置
 */
/* 修改滚动条样式
    因为容器className不知道是从哪来的，反正是无规律可循的字符串，
    又因为它的子节点名称固定，于是从子节点给容器加上个id，再用css修改容器滚动条属性
*/
const initStyles = () => {
    if(!document.getElementById('mobage-game-container')) {
        return;
    }

    let scroll = document.getElementById('mobage-game-container').parentNode;
    scroll.id = 'liver-collection-container';
    
    // 隐藏左侧侧边栏
    let leftPanel = document.getElementById('mobage-game-container').parentNode.parentNode.firstChild;
    leftPanel.style.display = 'none';
    scroll.style.marginLeft = '';
    
    // 隐藏右侧侧边栏
    let rightPanel = document.getElementById('submenu');
    rightPanel.style.display = 'none';
}

const setZoom = zoom => {
    let htmlBody = document.getElementsByTagName('html')[0];

    htmlBody.style.zoom = zoom;
}

const initZoom = () => {
    chrome.extension.sendMessage({ message: 'get_zoom'}, response => {
        const { zoom } = response;
    
        setZoom(zoom);
    });
}

module.exports = { initStyles, initZoom, setZoom };