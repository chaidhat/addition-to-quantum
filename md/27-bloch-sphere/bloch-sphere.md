# Bloch Sphere

A general pure state of a qubit is
$$\left\lvert \psi \right\rangle=\cos\frac{\theta}{2}\left\lvert 0 \right\rangle+e^{i\phi}\sin\frac{\theta}{2}\left\lvert 1 \right\rangle\quad \theta\in[0,\pi]\quad \phi\in[0,2\pi]$$
Where the orthogonal states are antipodal (North pole is $\left\lvert 0 \right\rangle$ and South pole is $\left\lvert 1 \right\rangle$).
The equator contains equal superpositions like $\left\lvert + \right\rangle=\frac{1}{\sqrt{2}}(\left\lvert 0 \right\rangle+\left\lvert 1 \right\rangle)$ and $\left\lvert - \right\rangle=\frac{1}{\sqrt{2}}(\left\lvert 0 \right\rangle-\left\lvert 1 \right\rangle)$.

A state can be on the inside of a Bloch sphere which means its a mixed state. If a state is on the surface of the Bloch sphere, it is a pure state.

A rotation by angle $\theta$ around the axis $\hat{n}$ is given by
$$R_{\hat{n}}(\theta) = e^{-i\theta\,\hat{n}\cdot\vec{\sigma}/2} = \cos\left(\tfrac{\theta}{2}\right)I - i\sin\left(\tfrac{\theta}{2}\right)(n_x\sigma_x + n_y\sigma_y + n_z\sigma_z)$$
Where
$$R_x(\theta) = \begin{pmatrix} \cos\tfrac{\theta}{2} & -i\sin\tfrac{\theta}{2} \\ -i\sin\tfrac{\theta}{2} & \cos\tfrac{\theta}{2} \end{pmatrix}$$
$$R_y(\theta) = \begin{pmatrix} \cos\tfrac{\theta}{2} & -\sin\tfrac{\theta}{2} \\ \sin\tfrac{\theta}{2} & \cos\tfrac{\theta}{2} \end{pmatrix}$$
$$R_z(\theta) = \begin{pmatrix} e^{-i\theta/2} & 0 \\ 0 & e^{i\theta/2} \end{pmatrix}$$
