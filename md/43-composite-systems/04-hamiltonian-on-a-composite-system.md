# Hamiltonian on a Composite System

### Non-interacting Hamiltonian

$$H^{(total)}=H^{(A)}+H^{(B)}$$
Where $H^{(A)}, H^{(B)}$ are non interacting.

Two spin-1/2 particles exist where
$$H^{(total)}=\hat{S}^{(total)}_x+ \hat{S}^{(A)}_x + \hat{S}^{(B)}_x$$
$$=\hat{S}_x\otimes I + I \otimes \hat{S}_x$$
Let there be a state where
$$\left\lvert \psi \right\rangle=a_{11}\left\lvert +,+ \right\rangle+a_{12}\left\lvert +,- \right\rangle+a_{21}\left\lvert -,+ \right\rangle+a_{22}\left\lvert -,- \right\rangle$$
Recall what a $\hat{S}_x$ operator does [<span class="underline">here</span>](#spin-12-systems).
$$S_x\triangleq\frac{\hbar}{2}\begin{pmatrix}0 & 1\\ 1 & 0\end{pmatrix}\quad$$
basically,
$$\hat{S_x}^{(A)}=\frac{\hbar}{2}\begin{pmatrix}0 & 1\\ 1 & 0\end{pmatrix}\otimes \begin{pmatrix}1 & 0\\ 0 & 1\end{pmatrix}$$
$$= \frac{\hbar}{2}\begin{pmatrix} 0 \cdot I & 1 \cdot I \\ 1 \cdot I & 0 \cdot I \end{pmatrix}$$
$$= \frac{\hbar}{2}\begin{pmatrix} 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \\ 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \end{pmatrix}$$
So
$$\hat{S}_x^{(A)}\left\lvert \psi \right\rangle=\frac{\hbar}{2}(a_{11}\left\lvert +,+ \right\rangle+a_{12}\left\lvert +,- \right\rangle-a_{21}\left\lvert -,+ \right\rangle-a_{22}\left\lvert -,- \right\rangle)$$
$$\hat{S}_x^{(B)}\left\lvert \psi \right\rangle=\frac{\hbar}{2}(a_{11}\left\lvert +,+ \right\rangle-a_{12}\left\lvert +,- \right\rangle+a_{21}\left\lvert -,+ \right\rangle-a_{22}\left\lvert -,- \right\rangle)$$

$$\hat{S}_x^{(total)}\left\lvert \psi \right\rangle=\hbar(a_{11}\left\lvert +,+ \right\rangle-a_{12}\left\lvert -,- \right\rangle)$$

   Eigenstate of $\hat{S}_x^{(\text{tot})}$            Eigenvalue
  ------------------------------------------ -------------------------------
                $|+,+\rangle$                 $S_x^{(\text{tot})} = \hbar$
         $|+,-\rangle, \ |-,+\rangle$           $S_x^{(\text{tot})} = 0$
                $|-,-\rangle$                 $S_x^{(\text{tot})} = -\hbar$

Looks like a spin-1

### Time Evolution of Non-interacting Composite Systems

If $H=\hat{S}_x^{(total)}$ then
$$e^{-it\hat{S}_x^{(total)}}=e^{-it\left(\hat{S}_x^{(A)}+\hat{S}_x^{(B)}\right)}$$
$$=e^{-it\hat{S}_x^{(A)}}e^{-it\hat{S}_x^{(B)}}$$
$$=(e^{-it\hat{S}}\otimes I)(I \otimes e^{-it\hat{S}})$$
$$=e^{-it\hat{S}_x}\otimes e^{-it\hat{S}_x}$$
Note that
$$H^{(\text{tot})} = H_1^{(A)} + H_2^{(B)} \implies U^{(\text{tot})} = U_1^{(A)} U_2^{(B)} = U_1 \otimes U_2$$
$$U^{(\text{tot})}(|v\rangle \otimes |w\rangle) = (U_1 |v\rangle) \otimes (U_2 |w\rangle)$$
$$\text{product state} \longrightarrow \text{product state}$$

Unitary evolution under non-interacting Hamiltonian cannot generate an entangled state.

### Interacting Hamiltonian

$$H = \underbrace{H^{(A)} \otimes I + I \otimes H^{(B)}}_{\text{local part}} + \underbrace{H_{\text{int}}}_{\text{interaction term}}$$
Where $H_{int}$ is any operator on $H_A\otimes H_B$.

Example

Note $\sigma_x$ is defined in [<span class="underline">Pauli matrix</span>](#pauli-matrices).
$$H^{(total)}=\hbar \omega \sigma_x^{(A)}\sigma_x^{(B)}=\hbar\omega (\sigma_x\otimes \sigma_x)$$
Note that $\sigma_x\otimes \sigma_x$ cannot be written as $\sigma_x\otimes I + I \otimes \sigma_x$ hence this belongs in the $H_{int}$ term.
We observe that the unitary evolution is
$$U^{(total)}=e^{-itH/\hbar}=e^{-i\omega t(\sigma_x\otimes \sigma_x)}$$
Suppose $\left\lvert \psi(0) \right\rangle = \left\lvert 0 \right\rangle \otimes \left\lvert 0 \right\rangle$
$$\left\lvert \psi(0) \right\rangle = \frac{\left\lvert + \right\rangle + \left\lvert - \right\rangle}{\sqrt{2}} \otimes \frac{\left\lvert + \right\rangle + \left\lvert - \right\rangle}{\sqrt{2}} \\
$$
$$= \frac{1}{2}\left(\left\lvert +,+ \right\rangle + \left\lvert +,- \right\rangle + \left\lvert -,+ \right\rangle + \left\lvert -,- \right\rangle\right)$$
Then via the unitary time evolution we get
$$\begin{align*}
    \left\lvert \psi(t) \right\rangle & = e^{-i\omega t \sigma_x \otimes \sigma_x}\left\lvert \psi(0) \right\rangle                                                                                                                                                                                 \\
                  & = \frac{1}{2}\left(e^{-i\omega t \sigma_x \otimes \sigma_x}\left\lvert +,+ \right\rangle + e^{-i\omega t \sigma_x \otimes \sigma_x}\left\lvert +,- \right\rangle + e^{-i\omega t \sigma_x \otimes \sigma_x}\left\lvert -,+ \right\rangle + e^{-i\omega t \sigma_x \otimes \sigma_x}\left\lvert -,- \right\rangle\right) \\
                  & = \frac{1}{2}\left(e^{-i\omega t}\left\lvert +,+ \right\rangle + e^{i\omega t}\left\lvert +,- \right\rangle + e^{i\omega t}\left\lvert -,+ \right\rangle + e^{-i\omega t}\left\lvert -,- \right\rangle\right)
\end{align*}$$
Note
$$e^{-i\omega t \sigma_x \otimes \sigma_x} \left\lvert +,+ \right\rangle = e^{-i\omega t} \left\lvert +,+ \right\rangle$$
$$e^{-i\omega t \sigma_x \otimes \sigma_x} \left\lvert +,- \right\rangle = e^{+i\omega t} \left\lvert +,- \right\rangle$$
$$e^{-i\omega t \sigma_x \otimes \sigma_x} \left\lvert -,+ \right\rangle = e^{+i\omega t} \left\lvert -,+ \right\rangle$$
$$e^{-i\omega t \sigma_x \otimes \sigma_x} \left\lvert -,- \right\rangle = e^{-i\omega t} \left\lvert -,- \right\rangle$$
So
$$\det \frac{1}{2}\begin{pmatrix} e^{-i\omega t} & e^{i\omega t} \\ e^{i\omega t} & e^{-i\omega t} \end{pmatrix} = \frac{1}{4}\left(e^{-2i\omega t} - e^{2i\omega t}\right) = -\frac{i}{2}\sin(2\omega t) \neq 0$$
$$\implies \text{Entangled state for } t > 0, \quad t \neq \frac{k\pi}{\omega}$$
$$\text{Maximal when } t = \frac{\pi}{4\omega}$$
