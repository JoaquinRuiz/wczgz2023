<?php
/**
 * Plugin Name: WordCamp Zaragoza 2023
 * Plugin URI: https://jokiruiz.com
 * Description: WordCamp Zaragoza 2023
 * Version: 1.0.0
 * Author: Joaquín Ruiz
 * Author URI: https://jokiruiz.com
 * License: GPLv2 or later
 */
define('WCZGZ2023_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('WCZGZ2023_PLUGIN_URL', plugin_dir_url(__FILE__));

function run_custom_blocks(){
    foreach (glob(WCZGZ2023_PLUGIN_DIR . "inc/*.php") as $filename) {
        include $filename;
    }
}

run_custom_blocks();