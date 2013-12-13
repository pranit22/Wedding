/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    executeFunctions();
    
    $(window).resize(function() {
        resizeWindow();
    });
    
    
});

function resizeWindow() {
    var baseHeight = $(window).height();
    $('body').height(baseHeight);
    $('img#we').each(function() {
        $(this).outerWidth($(this).parent().innerWidth());
        $(this).show();
    });
    
}

function executeFunctions() {
    resizeWindow();
}