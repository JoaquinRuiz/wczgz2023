<?php

class WordCampBlock {

    public $block_name;

    public function __construct(string $block_name){
        $this->block_name = $block_name;
    }

    public function init(){
        add_action('enqueue_block_editor_assets', array($this, 'backend') );
        add_action('enqueue_block_assets', array($this, 'frontend'));
    }

    public function backend(){
        wp_enqueue_script(
            'wordcamp-scripts',
            WCZGZ2023_PLUGIN_URL . 'build/index.js',
            array(
                'wp-blocks',
                'wp-components',
                'wp-element',
                'wp-i18n',
                'wp-editor'
            ),
            false,
            true);

        wp_enqueue_style(
            $this->block_name.'-editor-style',
            WCZGZ2023_PLUGIN_URL.'editor.css',
            array(),
            false
        );

    }

    public function frontend(){
        register_block_type(
            'jokiruiz/wordcamp-block',
            array(
                'editor_script' => 'wordcamp-scripts',
            )
        );
        wp_enqueue_style(
            $this->block_name.'-frontend-style',
            WCZGZ2023_PLUGIN_URL.'editor.css',
            array(),
            false
        );

    }
}

$simple_text_block = new WordCampBlock("misco-wordcamp");
$simple_text_block->init();
