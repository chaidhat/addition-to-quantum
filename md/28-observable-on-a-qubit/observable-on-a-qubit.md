# Observable on a qubit

Any [[observables|observable]] on a qubit can be written as

$$\begin{gather*}
    \hat{A}=a_0\sigma_0+\vec{a}\vec{\sigma_{1,2,3}}
\end{gather*}$$

You can think of $a_0\sigma_0$ as the scalar value and
$\vec{a}\vec{\sigma_{1,2,3}}$ as it helps with the [[bloch-sphere]].

This can be written in spherical units too

$$\begin{gather*}
    \hat{n}=(n_x,n_y,n_z)=(\sin\theta\cos\psi,\sin\theta\sin\psi,\cos\theta)
\end{gather*}$$

spin along $\hat{n}$ can be described as $\hat{S}=\frac{\hbar}{2}\vec{\sigma}$.
This is known as the "spin along the unit vector $\hat{n}$".
To do this we project $\hat{S}$ onto $\hat{n}$.

$$\begin{gather*}
    \hat{S}_n=\hat{S}\cdot\hat{n}=\frac{\hbar}{2}\vec{\sigma}\cdot\hat{n}\\
    =\frac{\hbar}{2}\left(n_x\sigma_x+n_y\sigma_y+n_z\sigma_z\right)\\
    =n_x\!\begin{pmatrix}0&1\\1&0\end{pmatrix} + n_y\!\begin{pmatrix}0&-i\\i&0\end{pmatrix} + n_z\!\begin{pmatrix}1&0\\0&-1\end{pmatrix}
\end{gather*}$$
$$= \begin{pmatrix} n_z & n_x - i n_y \\ n_x + i n_y & -n_z \end{pmatrix}$$
$$\Rightarrow\hat{S}_{\hat{n}} = \frac{\hbar}{2}\begin{pmatrix} n_z & n_x - i n_y \\ n_x + i n_y & -n_z \end{pmatrix}.$$

We work out the eigenvalues by doing
$$det(\hat{S}_{\hat{n}} - \lambda I) = 0$$
$$\Rightarrow\left(\tfrac{\hbar}{2}n_z-\lambda\right)\left(-\tfrac{\hbar}{2}n_z-\lambda\right) - \left(\tfrac{\hbar}{2}\right)^2(n_x - i n_y)(n_x + i n_y) = 0$$
$$\Rightarrow\lambda^2 - \left(\tfrac{\hbar}{2}\right)^2(n_x^2+n_y^2+n_z^2) = 0$$
$$\lambda^2=\left(\tfrac{\hbar}{2}\right)^2|\hat{n}|^2\Rightarrow\lambda=\pm\tfrac{\hbar}{2}|\hat{n}|$$
Because $\hat{n}$ is a unit vector,
$$\lambda=\pm\tfrac{\hbar}{2}$$
