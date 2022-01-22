let scene, camera, renderer, cube;

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    camera.position.z = 5;
    

    renderer = new THREE.WebGLRenderer({ antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry( 2, 2, 2 );
    const texture = new THREE.TextureLoader().load('crate.gif');
    const material = new THREE.MeshBasicMaterial( {map: texture} );
    cube = new THREE.Mesh( geometry, material );
    scene.add(cube);
}

let animate = () => {
    cube.rotation.x += 1;
    cube.rotation.y += 1;
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
let onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize);

init();
animate();
