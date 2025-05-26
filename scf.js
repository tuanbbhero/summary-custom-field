/*
 * By: tuanphan
 * Date: 26-05-2025
 * Note: I offer free install, free customize, you can email me.
 */
var tpProjectCustomFields=function(){if($('.summary-item').length>0){var a=$('.summary-item'),b=a.length,c=5,d=500;function e(f){var g=Math.min(f+c,b);for(var h=f;h<g;h++){(function(i){var j=$(a[i]),k=j.find('a.summary-title-link'),l=k.attr('href');if(l&&k.length&&k.prev('.summary-custom-field').length===0){var m='?nocache='+new Date().getTime()+Math.random();$.get(l+m,function(n){var o=$(n).find('p.custom-field').clone();if(o.length){if(k.prev('.summary-custom-field').length===0){o.addClass('summary-custom-field');k.before(o);o.css({opacity:'0.8'})}}})}})(h)}if(g<b){setTimeout(function(){e(g)},d)}}e(0)}},tpCustomFieldsInitialized=false;function initializeCustomFields(){if(!tpCustomFieldsInitialized){tpCustomFieldsInitialized=true;setTimeout(function(){tpProjectCustomFields()},1000)}}$(document).ready(function(){initializeCustomFields()});$(window).on('load',function(){initializeCustomFields()});
