import { registerBlockType } from '@wordpress/blocks';
import { TextControl } from '@wordpress/components';
import { MediaUpload } from '@wordpress/block-editor';

const ALLOWED_MEDIA_TYPES = [ 'image' ];

const svg = <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                 width="222.000000pt" height="210.000000pt" viewBox="0 0 222.000000 210.000000"
                 preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,210.000000) scale(0.100000,-0.100000)"
       fill="#000000" stroke="none">
        <path d="M0 1050 l0 -1050 1110 0 1110 0 0 1050 0 1050 -1110 0 -1110 0 0
-1050z m1025 905 c65 -17 165 -67 191 -96 16 -18 16 -19 0 -19 -9 0 -28 -11
-41 -25 -37 -36 -33 -82 14 -168 59 -108 60 -137 12 -303 -23 -76 -44 -146
-47 -154 -5 -12 -184 486 -184 512 0 4 15 8 32 10 22 2 34 9 36 21 3 16 -7 17
-145 15 -124 -3 -148 -5 -148 -18 0 -10 12 -16 32 -18 18 -2 34 -10 38 -20 4
-9 22 -58 41 -109 l33 -91 -49 -149 c-28 -81 -53 -155 -56 -163 -5 -12 -184
496 -184 522 0 4 15 8 33 10 20 2 32 8 32 18 0 12 -15 15 -87 13 -53 -1 -88 2
-88 8 0 18 91 107 143 141 114 73 261 97 392 63z m749 -172 c14 -13 28 -34 32
-47 9 -38 1 -81 -16 -81 -11 0 -16 14 -18 55 -4 76 -17 88 -54 53 l-28 -27 59
-61 c57 -59 60 -64 116 -228 42 -124 54 -172 46 -180 -13 -13 -3 -23 -127 133
l-99 125 -13 95 c-8 52 -15 102 -18 111 -3 10 10 26 33 42 21 15 34 27 30 27
-22 0 -94 -60 -197 -164 -104 -106 -140 -133 -140 -107 0 5 18 52 40 103 34
78 49 100 92 136 l52 43 92 -2 c82 -2 96 -6 118 -26z m-16 -56 c4 -31 -8 -35
-31 -9 -13 14 -14 21 -5 30 18 18 33 9 36 -21z m-155 -325 l-37 -313 -49 -30
c-27 -17 -50 -29 -52 -27 -1 2 -24 60 -50 129 l-48 127 95 148 c52 82 112 179
134 216 21 36 40 65 41 64 1 -1 -14 -143 -34 -314z m290 291 c4 -2 7 -10 7
-16 0 -7 29 -30 65 -50 36 -21 65 -43 65 -50 0 -29 -40 -77 -64 -77 -13 0 -26
-7 -30 -15 -6 -18 -1 -19 25 -5 16 9 19 7 19 -8 0 -19 -66 -90 -75 -80 -3 2
-23 56 -46 119 -33 93 -39 122 -34 157 6 40 8 42 33 36 15 -4 30 -9 35 -11z
m-513 -84 c0 -9 -7 -32 -15 -52 -12 -30 -12 -37 0 -47 11 -9 10 -19 -11 -63
-16 -36 -22 -62 -18 -83 9 -49 -53 -164 -100 -187 -20 -9 -38 -17 -40 -17 -2
0 27 91 66 203 49 141 71 223 75 272 l6 70 18 -40 c10 -22 19 -47 19 -56z
m209 59 c-21 -41 -201 -323 -215 -338 -24 -24 -18 73 7 123 16 33 203 237 217
237 1 0 -3 -10 -9 -22z m-1020 -321 c62 -170 110 -311 107 -314 -8 -9 -81 42
-127 88 -94 94 -143 214 -143 349 0 84 29 211 44 193 4 -4 57 -147 119 -316z
m1095 234 c3 -38 28 -159 56 -270 51 -204 57 -255 44 -380 l-7 -62 -28 27
c-15 14 -54 64 -85 110 l-58 84 29 280 c16 154 32 280 35 280 4 0 10 -31 14
-69z m139 -231 c95 -120 95 -121 102 -191 4 -39 4 -73 1 -76 -3 -4 -31 -2 -62
3 l-57 9 -43 180 c-45 184 -47 195 -40 195 3 0 47 -54 99 -120z m-861 -2 c14
-40 42 -117 62 -170 l36 -98 -101 -51 c-89 -44 -106 -50 -141 -44 -23 4 -38
12 -35 18 2 7 35 103 73 215 38 111 71 202 74 202 3 0 17 -33 32 -72z m433
-128 c16 -45 11 -48 -43 -29 l-31 11 22 44 c23 48 26 47 52 -26z m-20 -51 c40
-10 44 -15 64 -66 12 -30 21 -60 21 -67 0 -9 -43 -4 -160 18 -88 16 -160 32
-160 35 1 10 154 90 173 90 10 1 38 -4 62 -10z m523 -105 c12 -9 -27 -124 -53
-158 -49 -65 -54 -59 -48 51 6 129 4 125 55 117 24 -4 45 -8 46 -10z m-798
-66 c0 -40 -3 -124 -7 -185 l-6 -113 -138 73 c-125 65 -139 76 -153 109 l-14
37 151 75 c84 41 155 75 160 75 4 1 7 -32 7 -71z m196 42 c87 -17 159 -32 161
-34 4 -3 -311 -285 -334 -300 -10 -6 -13 33 -13 178 0 154 2 186 14 186 8 0
85 -14 172 -30z m349 -37 c26 -37 49 -72 52 -79 4 -11 -74 -111 -88 -113 -3
-1 -30 44 -61 98 l-56 100 46 30 c26 17 50 31 54 31 3 0 28 -30 53 -67z m-107
-108 c28 -53 52 -99 52 -103 0 -9 -428 -97 -435 -90 -6 6 306 287 320 287 6 1
34 -42 63 -94z m-758 -4 c17 -33 12 -39 -47 -51 -32 -7 -64 -15 -73 -18 -8 -3
5 16 30 42 48 50 73 57 90 27z m-125 -41 c-36 -34 -47 -39 -112 -47 -40 -5
-73 -8 -73 -6 0 12 210 105 220 96 2 -2 -14 -21 -35 -43z m1104 -3 c-11 -9
-122 -47 -126 -43 -3 2 14 25 38 51 l43 46 25 -25 c14 -14 23 -27 20 -29z
m-38 -171 c-31 -85 -59 -152 -62 -148 -5 5 -31 149 -43 235 -1 8 128 65 150
66 6 1 -14 -68 -45 -153z m-766 75 c72 -38 130 -74 130 -80 0 -6 -20 -36 -44
-66 -30 -40 -48 -54 -59 -50 -9 3 -53 29 -99 58 l-83 52 0 62 c0 61 6 93 19
93 3 0 65 -31 136 -69z m-699 19 c26 -12 53 -19 61 -16 16 7 17 -6 1 -22 -30
-30 -118 -1 -118 39 0 23 -2 23 56 -1z m269 11 c-13 -12 -158 -61 -181 -61
-16 0 -16 2 4 23 16 16 43 25 100 33 42 6 79 12 82 13 2 0 0 -3 -5 -8z m1095
-136 c12 -64 20 -121 18 -127 -2 -6 -28 24 -57 66 l-53 77 32 49 c18 28 33 50
35 50 2 0 13 -52 25 -115z m-707 -68 l68 -43 -74 -47 c-41 -26 -77 -47 -79
-47 -3 0 -11 35 -17 78 -7 42 -14 90 -17 105 l-6 29 29 -16 c15 -8 59 -35 96
-59z m666 -19 c23 -32 39 -58 37 -58 -3 0 -26 10 -51 22 -43 21 -45 24 -45 67
0 50 0 50 59 -31z m-755 -208 c8 -35 14 -65 13 -66 -5 -5 -206 142 -207 150 0
5 35 47 77 94 l78 85 12 -99 c7 -54 19 -128 27 -164z m810 119 c12 -11 -42
-92 -55 -83 -13 7 -59 103 -59 121 0 12 93 -19 114 -38z m99 -24 c34 -30 34
-68 1 -73 -18 -3 -25 5 -38 44 -9 26 -16 49 -16 51 0 11 29 -1 53 -22z m-50
-32 c18 -45 15 -53 -23 -53 -57 0 -63 8 -32 51 15 21 30 39 33 39 4 0 14 -17
22 -37z m-947 -80 l94 -67 -67 -43 c-38 -24 -70 -43 -73 -43 -3 0 -17 50 -31
110 -14 61 -24 110 -22 110 2 0 47 -30 99 -67z m99 -130 c-8 -27 -15 -49 -15
-50 0 -7 -130 -2 -130 5 0 8 137 90 152 91 4 1 1 -20 -7 -46z m63 -6 c3 -46 3
-47 -27 -47 -34 0 -36 6 -19 62 17 56 42 48 46 -15z"/>
        <path d="M1895 1630 c3 -5 11 -10 16 -10 6 0 7 5 4 10 -3 6 -11 10 -16 10 -6
0 -7 -4 -4 -10z"/>
    </g>
</svg>;


registerBlockType('jokiruiz/wordcamp-block', {
    title: "WordCamp Zaragoza",
    description: "WordCamp Zaragoza Gutenberg block",
    category: 'text',
    icon: svg,
    attributes: {
        name: {
            type: 'string'
        },
        imgUrl: {
            type: 'string',
            source: 'attribute',
            selector: 'img',
            attribute: 'src',
        }
    },
    edit : (props) => {
        const { attributes: { name, imgUrl }, setAttributes } = props ;
        const changeName = (value) => {
            setAttributes({name:value})
        };
        const selectImage = (value) => {
            setAttributes({
                imgUrl: value.sizes.full.url,
            })
        };
        const style = {
            backgroundImage: 'url('+imgUrl+')'
        }

        return (
            <div className="wordcamp-block">
                <div className="editor">
                    <TextControl
                        label="Introduce el texto"
                        value={ name }
                        onChange={ changeName }
                    />
                    <MediaUpload
                        allowedTypes={ ALLOWED_MEDIA_TYPES }
                        onSelect={selectImage}
                        multiple={false}
                        render={({ open }) => (
                            <>
                                <button onClick={open}>
                                    {imgUrl === null
                                        ? 'SUBE'
                                        : 'SUBE IMAGEN DE FONDO'}
                                </button>
                                <div className="preview">
                                    <img src={imgUrl} />
                                </div>
                            </>
                        )}
                    />

                </div>
                <div style={style} className="wordcamp-visor">
                    <p className="name"><span>{name}</span></p>
                </div>
            </div>
        )
    },
    save : (props) => {
        const { attributes: { name, imgUrl } } = props;
        const style = {
            backgroundImage: 'url('+imgUrl+')'
        }

        return (
            <>
                <div style={style} className="wordcamp-visor">
                    <p className="name"><span>{name}</span></p>
                </div>
            </>
        )
    }
})
